const port = process.env.PORT || 8000;
const fs = require('fs');
const fetch = require("node-fetch");
const express = require("express");
const SocketServer = require('ws').Server;
const bodyParser = require('body-parser');
const PDFDocument = require('pdfkit');
const crypto = require('crypto');
const sharp = require('sharp');
const archiver = require('archiver');
const app = express();
app.use(express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var IDCounter = 1;
var sessCounter = 1;
var sessions = {};
const cardwidth = 6.35;
const cardheight = 8.80;
const cardwidthPt = cmToPt(cardwidth);
const cardheightPt = cmToPt(cardheight);
const storagePath = "https://proxynexus.blob.core.windows.net/";
const altArtCards = JSON.parse(fs.readFileSync('static/json/altart.json')).altArtCards; 

app.post('/api/makePDF', function (req, res) {
	// unpack request
	const sessID = req.body.sessID;
	const paperSize = req.body.paperSize;
	const quality = req.body.quality;
	const includeBackArt = req.body.includeBackArt;
	const logInfo = req.body.logInfo;
	const container = ((q) => {
		switch(q) {
			case 'High':
				return 'images/';
			case 'Medium':
				return 'med-images/';
		}
	})(quality);
	const requestedImages = req.body.requestedImages;
	const downloadID = IDCounter;
	IDCounter = IDCounter + 1;
	const ws = sessions[sessID];
	console.log("PDF Request! DownloadID: " + downloadID + "; Papersize: " + paperSize + ", Quality: " + quality + ", " + logInfo);
	
	res.status(200);
	res.end();

	// Catch empty image request, and return error message
	if (requestedImages.length == 0) {
		console.error("DownloadID " + downloadID + ": No images requested");
		res.status(200);
		ws.send(JSON.stringify({ "success": false, "errorMsg": "No images requested.", "reqType": "pdf" }));
		return;
	}

	// determine margin sizes from selected paper size, return error if chouse is missing
	if (paperSize === 'A4') {
		var leftMargin = 30;
		var topMargin = 46;
	}
	else if (paperSize === 'Letter') {
		var leftMargin = 36;
		var topMargin = 21;
	} else {
		console.error("DownloadID " + downloadID + ": Invalid paper size");
		ws.send(JSON.stringify({ "success": false, "errorMsg": "Invalid paper size", "reqType": "pdf" }));
		return;
	}

	// Catch missing image selection. Container would be null since it won't hit either case in assignment
	if (container == null) {
		console.error("DownloadID " + downloadID + ": No image quality selected");
		ws.send(JSON.stringify({ "success": false, "errorMsg": "Invalid paper size", "reqType": "pdf" }));
		return;
	}

	// request is good, make hash for request and pdf file name
	const requestedPDFOptions = paperSize + quality + includeBackArt + requestedImages + logInfo;
	const hash = crypto.createHash('sha1').update(requestedPDFOptions).digest('hex');
	const pdfFileName = hash + ".pdf";
	const pdfPath = __dirname + "/static/tmp/" + pdfFileName;
	console.log("DownloadID " + downloadID + ": PDF Name: " + pdfFileName);

	// check if requested pdf or zip was already generated, save from re-generating it
	if (fs.existsSync(pdfPath)) {
		const fileName = "/tmp/" + pdfFileName;
		console.log("DownloadID " + downloadID + ": PDF already exists, don't generate");
		console.log("DownloadID " + downloadID + ": Sent " + fileName + " to Session " + ws.id);
		ws.send(JSON.stringify({ "success": true, "downloadLink": fileName, "reqType": "pdf" }));
		return;
	}
	const zipPath = pdfPath.split(".")[0] + ".zip";
	const zipFileName = pdfFileName.split('.')[0] + ".zip";
	if (fs.existsSync(zipPath)) {
		const fileName = "/tmp/" + zipFileName;
		console.log("DownloadID " + downloadID + ": PDFs in zip file already exists, don't generate");
		console.log("DownloadID " + downloadID + ": Sent " + fileName + " to Session "  + ws.id);
		ws.send(JSON.stringify({ "success": true, "downloadLink": fileName, "reqType": "pdf" }));
		return;
	}

	const opt = {
		container: container,
		quality: quality,
		includeBackArt: includeBackArt,
		downloadID: downloadID,
		pdfFileName: pdfFileName,
		requestedImages: requestedImages,
		pdfPath: pdfPath,
		paperSize: paperSize,
		topMargin: topMargin,
		leftMargin: leftMargin,
		ws: ws,
	};
	fetchImagesForPDF(opt);
});

async function fetchImagesForPDF(opt) {	
	const container = opt.container;
	const quality = opt.quality;
	const includeBackArt = opt.includeBackArt;
	const downloadID = opt.downloadID;
	const pdfFileName = opt.pdfFileName
	const requestedImages = opt.requestedImages;
	const pdfPath = opt.pdfPath;
	const paperSize = opt.paperSize;
	const topMargin = opt.topMargin;
	const leftMargin = opt.leftMargin;
	const ws = opt.ws;

	// Add back side art for flippable IDs and alt art
	var imgCodes = addFlippedIds(requestedImages);
	if (includeBackArt) {
		imgCodes = addAltArtBacks(imgCodes);
	}

	// Strip duplicate and already downloaded image codes, to prevent downloading more than needed
	const imgFileNames = imgCodes.map(code => {return code + ".jpg"});	// used for building document later, need to maintain img count
	const uniqueImgCodes = [...new Set(imgFileNames)];
	const imgCodesToFetch = uniqueImgCodes.filter( code => {
		const imgPath = "./static/tmp/" + container + code;
		const onExistsMsg = "DownloadID " + downloadID + ": Found cached copy of " + code + ", don't download";
		return doesNotExists(imgPath, onExistsMsg);
	});

	// Download image files, and wait until all are ready
	console.log("DownloadID " + downloadID + ": Code list ready, Fetching images...");
	ws.send(JSON.stringify({ "status": "Fetching images...", "reqType": "pdf" }));
	const imgPath = "./static/tmp/" + container;
	const url = storagePath + container;
	try {
		await downloadFiles(imgCodesToFetch, imgPath, url, downloadID);
	}
	catch(err) {
		console.error("DownloadID " + downloadID + ": " + err.message);
		ws.send(JSON.stringify({ "success": false, "errorMsg": "Error fetching images, try again.", "reqType": "pdf" }));
		return;
	}

	console.log("DownloadID " + downloadID + ": Adding images to doc...");
	ws.send(JSON.stringify({ "status": "Adding images to pdf...", "reqType": "pdf" }));
	const CARDS_PER_PDF = 144
	if (imgFileNames.length <= CARDS_PER_PDF) {
		const doc = new PDFDocument({
			size: paperSize,
			margins: {
				top: topMargin,
				bottom: topMargin,
				left: leftMargin,
				right: leftMargin
			  }
		});
	
		doc.pipe(fs.createWriteStream(pdfPath));
		makeFrontPage(doc, quality);
		doc.addPage();
		drawCutLines(doc, leftMargin, topMargin);
		addImages(imgFileNames, doc, container, leftMargin, topMargin);
		doc.end();
		var fileName = "/tmp/" + pdfFileName;
		console.log("DownloadID " + downloadID + ": Sent " + fileName + " to Session " + ws.id);
		ws.send(JSON.stringify({ "success": true, "downloadLink": fileName, "reqType": "pdf" }));
		return;
	} else {
		console.log("DownloadID " + downloadID + ": Large PDF, splitting it up...")

		const docNum = Math.ceil(imgFileNames.length / CARDS_PER_PDF);
		const splitPDFPath = pdfPath.split(".");
		var allSplitPDFs = [];

		for (var i=0; i<docNum; i++) {
			const doc = new PDFDocument({
				size: paperSize,
				margins: {
					top: topMargin,
					bottom: topMargin,
					left: leftMargin,
					right: leftMargin
				  }
			});
			const lowerIndex = i * CARDS_PER_PDF;
			if ( (i+1)*CARDS_PER_PDF > imgFileNames.length ) {
				var upperIndex = imgFileNames.length
			} else {
				var upperIndex = (i+1)*CARDS_PER_PDF;
			}

			const splitPdfFileName = pdfFileName.split('.')[0] + "-" + (i+1) + ".pdf";
			allSplitPDFs.push(splitPdfFileName);
			const splitPDF = splitPDFPath[0] + "-" + (i+1) + ".pdf";
			doc.pipe(fs.createWriteStream(splitPDF));
			makeFrontPage(doc, quality);
			doc.addPage();
			drawCutLines(doc, leftMargin, topMargin);
			addImages(imgFileNames.slice(lowerIndex, upperIndex), doc, container, leftMargin, topMargin);
			doc.end();
		}

		ws.send(JSON.stringify({ "status": "Adding pdfs to zip file...", "reqType": "pdf" }));
		console.log("DownloadID " + downloadID + ": Zipping up pdfs...");

		const zipPath = splitPDFPath[0] + ".zip";
		const zipFileName = pdfFileName.split('.')[0] + ".zip";
		var zipFile = fs.createWriteStream(zipPath);
		var archive = archiver('zip', {
			zlib: { level: 0 }
		});
		zipFile.on('close', function() {
			const fileName = "/tmp/" + zipFileName;
			console.log("DownloadID " + downloadID + ": Zip file ready, " + archive.pointer() + " total bytes");
			console.log("DownloadID " + downloadID + ": Sent " + fileName + " to Session " + ws.id);
			ws.send(JSON.stringify({ "success": true, "downloadLink": fileName, "reqType": "pdf" }));
			return;
		});
	
		archive.pipe(zipFile);
		allSplitPDFs.forEach(file => {
			archive.file(__dirname + "/static/tmp/" + file, { name: file });
		});
		archive.finalize();
	}
}

function addImages(lst, doc, container, leftMargin, topMargin) {
	var rowCount = 0;
	var colCount = 0;

	lst.forEach((code, i) => {
		const x = rowCount*cardwidthPt + leftMargin;
		const y = colCount*cardheightPt + topMargin;
		const imgPath = "static/tmp/" + container + code;

		doc.image(imgPath, x, y, {width: cardwidthPt, height: cardheightPt});
		rowCount++;

		if (rowCount > 2) {
			rowCount = 0;
			colCount++;
		}
		if (colCount > 2 && i+1<lst.length) {
			colCount = 0;
			doc.addPage();
			drawCutLines(doc, leftMargin, topMargin);
		}
	});
	return;
}

function drawCutLines(doc, leftMargin, topMargin) {
	doc.lineWidth(0.5);

	// draw top lines
	var x = cardwidthPt + leftMargin;
	var y = topMargin;
	doc.moveTo(x, y)
	   .lineTo(x, y-10)
	   .stroke();
	x += cardwidthPt;
	doc.moveTo(x, y)
	   .lineTo(x, y-10)
	   .stroke();

	// draw lines between row 1 and 2
	x = leftMargin;
	y += cardheightPt;
	doc.moveTo(x, y)
	   .lineTo(x-18, y)
	   .stroke();
	x += 3*cardwidthPt;
	doc.moveTo(x, y)
	   .lineTo(x+18, y)
	   .stroke();

	// draw lines between row 2 and 3
	x = leftMargin;
	y += cardheightPt;
	doc.moveTo(x, y)
	   .lineTo(x-18, y)
	   .stroke();
	x += 3*cardwidthPt;
	doc.moveTo(x, y)
	   .lineTo(x+18, y)
	   .stroke();

	// draw bottom lines
	x = cardwidthPt + leftMargin;
	y += cardheightPt;
	doc.moveTo(x, y)
	   .lineTo(x, y+10)
	   .stroke();
	x += cardwidthPt;
	doc.moveTo(x, y)
	   .lineTo(x, y+10)
		 .stroke();
	return;
}

function makeFrontPage(doc, quality) {
	doc.moveDown(15);
	doc.fontSize(20);
	doc.text('Generated by Proxy Nexus at https://proxynexus.net', {
		align: 'center'
	});

	doc.moveDown(3);
	doc.fontSize(14);
	doc.text('Print this PDF at 100% size with no additional margins.', {
		align: 'center'
	});

	doc.moveDown(20);
	doc.fontSize(12);
	doc.text('Image quality: ' + quality, {
		align: 'left'
	});
	doc.moveDown(1);
	doc.text('Generated on: ' + new Date().toString(), {
		align: 'left'
	});
	return;
}

function addFlippedIds(requestedImages) {
	var imgCodes = [...requestedImages];
	const biotechIndex = imgCodes.indexOf("08012");
	if (biotechIndex >= 0) {
		const extraCodes = ["08012a", "08012", "08012b", "08012", "08012c"];
		imgCodes.splice(biotechIndex + 1, 0, ...extraCodes);
	}
	const syncIndex = imgCodes.indexOf("09001");
	if (syncIndex >= 0) {
		imgCodes.splice(syncIndex + 1, 0, "09001a");
	}
	return imgCodes;
}

function addAltArtBacks(codes) {
	var updateCodes = [];
	codes.forEach(code => {
		updateCodes.push(code);
		altArtCards.forEach(altCard => {
			if (altCard.code === code && altCard.back_code) {
				updateCodes.push(altCard.back_code);
			}
		})
	});
	return updateCodes;
}

function cmToPt (cm) {
	return cm * 28.3465;
}

// if the path does NOT exist, return true
// if the path exists, print the message and return false
function doesNotExists(path, onExistsMsg) {
	try {
		fs.statSync(path);
		if (onExistsMsg != null) {
			console.log(onExistsMsg);
		}
		return false;
	}
	catch (err) {
		if (err.code === 'ENOENT') {
			return true;
		}
	}
}

// Duplicates an image with a unique border pixel set to red
// to make this copy unique as far as MPC can tell
async function setRedPixel(orinalPath, dupPath, index, completeMsg) {
	return sharp(orinalPath)
		.composite([{ input: 'misc/redDot.png', blend: 'over', top: index, left: 0 }])
		.toFile(dupPath)
		.then( () => { 
			console.log(completeMsg)
		})
		.catch(err => { 
			console.log(err)
		});
}

// Download all files in fileNames to destination from the baseUrl
// Needs to be called from within a try-catch block!!
async function downloadFiles(fileNames, destination, baseUrl, downloadID) {
	const promises = fileNames.map( async fileName => {
		const filePath = destination + fileName;
		const url = baseUrl + fileName;
		const imgRes = await fetch(url)
		.then( res => {
			if (!res.ok) {
				throw new Error("Error downloading: " + fileName);
			}
			console.log("DownloadID " + downloadID + ": Downloaded " + fileName);
			return res;
		});
		const fileStream = fs.createWriteStream(filePath);
		return new Promise((resolve, reject) => {
			imgRes.body.pipe(fileStream);
			imgRes.body.on("error", (err) => {
				reject(err);
			});
			fileStream.on("finish", function() {
				resolve();
			});
		});
	});
	await Promise.all(promises);
}

app.post('/api/makeMpcZip', function (req, res) {
	const sessID = req.body.sessID;
	const imagePlacement = req.body.imagePlacement;
	const includeBackArt = req.body.includeBackArt;
	const logInfo = req.body.logInfo;
	const container = ((q) => {
		switch(q) {
			case 'Scale':
				return 'scaled/';
			case 'Fit':
				return 'fitted/';
		}
	})(imagePlacement);
	var corpCodes = req.body.corpCodes;
	var runnerCodes = req.body.runnerCodes;
	const downloadID = IDCounter;
	IDCounter = IDCounter + 1;
	const ws = sessions[sessID];
	console.log("MPC-zip Request! DownloadID: " + downloadID + "; Image Placement: " + imagePlacement + ", " + logInfo);

	res.status(200);
	res.end();

	// Catch empty image request, and return error message
	const requestedImages = corpCodes.concat(runnerCodes);
	if (requestedImages.length == 0) {
		console.error("DownloadID " + downloadID + ": No images requested");
		ws.send(JSON.stringify({ "success": false, "errorMsg": "No images requested.", "reqType": "zip" }));
		return;
	}

	if (container == null) {
		console.error("DownloadID " + downloadID + ": No image placement method selected");
		ws.send(JSON.stringify({ "success": false, "errorMsg": "No image placement method selected", "reqType": "zip" }));
		return;
	}

	const requestedZipOptions = imagePlacement + includeBackArt + requestedImages + logInfo;
	const hash = crypto.createHash('sha1').update(requestedZipOptions).digest('hex');
	const zipFileName = hash + ".zip";
	const zipPath = __dirname + "/static/tmp/" + zipFileName;
	const zipDir = __dirname + "/static/tmp/zip-cache/" + hash + "/";
	console.log("DownloadID " + downloadID + ": Zip Name: " + zipFileName);

	var niseiCount = 0;
	corpCodes = corpCodes.filter(code => {
		const pre = parseInt(code.substring(0,2));
		if (pre >= 26) {
			niseiCount++;
			if (niseiCount > 10) {
				ws.send(JSON.stringify({ "niseiExceeded": true, "reqType": "zip" }));
				return false
			} else {
				return true;
			}
		}
		return true;
	});

	runnerCodes = runnerCodes.filter(code => {
		const pre = parseInt(code.substring(0,2));
		if (pre >= 26) {
			niseiCount++;
			if (niseiCount > 10) {
				ws.send(JSON.stringify({ "niseiExceeded": true, "reqType": "zip" }));
				return false
			} else {
				return true;
			}
		}
		return true;
	});

	if (fs.existsSync(zipPath)) {
		const fileName = "/tmp/" + zipFileName;
		console.log("DownloadID " + downloadID + ": Zip already exists, don't generate");
		console.log("DownloadID " + downloadID + ": Sent " + fileName + " to Session " + ws.id);
		ws.send(JSON.stringify({ "success": true, "downloadLink": fileName, "reqType": "zip" }));
		return;
	}

	if (!fs.existsSync(zipDir)) {
		fs.mkdirSync(zipDir);
		fs.mkdirSync(zipDir + "corp/");
		fs.mkdirSync(zipDir + "runner/");
	}

	const opt = {
		container: container,
		includeBackArt: includeBackArt,
		downloadID: downloadID,
		corpCodes: corpCodes,
		runnerCodes: runnerCodes,
		ws: ws,
		zipFileName: zipFileName,
		zipDir: zipDir,
		zipPath: zipPath
	};

	fetchImagesForZip(opt);
});

async function fetchImagesForZip(opt) {
	const container = opt.container;
	const includeBackArt = opt.includeBackArt;
	const downloadID = opt.downloadID;
	const corpCodes = opt.corpCodes;
	const runnerCodes = opt.runnerCodes;
	const ws = opt.ws;
	const zipFileName = opt.zipFileName;
	const zipDir = opt.zipDir;
	const zipPath = opt.zipPath;

	var corpFileCodes = addFlippedIds(corpCodes);
	var runnerFileCodes = runnerCodes;
	if (includeBackArt) {
		corpFileCodes = addAltArtBacks(corpFileCodes);
		runnerFileCodes = addAltArtBacks(runnerCodes);
	}

	const corpFilesNames = 	corpFileCodes.map( code => {
		return container.replace(/\/$/, "") + "-" + code + ".jpg";
	})

	const runnerFileNames = runnerFileCodes.map( code => {
		return container.replace(/\/$/, "") + "-" + code + ".jpg";
	})

	// buid an object of {fileName: {count: num, side: side}
	// used for duplicating multiple copies of the same card
	var imgCounts = {}
	corpFilesNames.forEach( fileName => {
		if (fileName in imgCounts) {
			if (imgCounts[fileName].count < 99) {
				imgCounts[fileName].count++;
			}
		} else {
			imgCounts[fileName] = { "count": 1, "side": "corp" };
		}
	});
	runnerFileNames.forEach( fileName => {
		if (fileName in imgCounts) {
			if (imgCounts[fileName].count < 99) {
				imgCounts[fileName].count++;
			}
		} else {
			imgCounts[fileName] = { "count": 1, "side": "runner" };;
		}
	});

	const imgFileNames = Object.keys(imgCounts);
	const imgCodesToFetch = imgFileNames.filter( file => {
		const imgPath = "./static/tmp/" + container + file;
		const onExistsMsg = "DownloadID " + downloadID + ": Found cached copy of " + file + ", don't download";
		return doesNotExists(imgPath, onExistsMsg);
	});

	// Download image files, and wait until all are ready
	console.log("DownloadID " + downloadID + ": Code list ready, Fetching images...");
	ws.send(JSON.stringify({ "status": "Fetching images...", "reqType": "zip" }));
	const imgPath = "./static/tmp/" + container;
	const url = storagePath + container;
	try {
		await downloadFiles(imgCodesToFetch, imgPath, url, downloadID);
	}
	catch(err) {
		console.error("DownloadID " + downloadID + ": " + err.message);
		ws.send(JSON.stringify({ "success": false, "errorMsg": "Error fetching images, try again.", "reqType": "zip" }));
		return;
	}

	// download back images if they're missing
	const cardBacks = ["corp-back.png", "runner-back.png"];
	const cardBacksToFetch = cardBacks.filter( file => {
		const imgPath = "./static/tmp/zip-cache/" + file;
		return doesNotExists(imgPath, null);
	});
	if (cardBacksToFetch.length > 0) {
		const imgPath = "./static/tmp/zip-cache/";
		const url = storagePath + "misc/";
		try {
			await downloadFiles(cardBacksToFetch, imgPath, url, downloadID);
		}
		catch(err) {
			console.error("DownloadID " + downloadID + ": " + err.message);
			ws.send(JSON.stringify({ "success": false, "errorMsg": "Error fetching images, try again.", "reqType": "zip" }));
			return;
		}
	}

	// For duplicate images, make a copy if not already cached and save the names
	var dupCorpFiles = [];
	var dupRunnerFiles = [];
	ws.send(JSON.stringify({ "status": "Preparing images...", "reqType": "zip" }));
	console.log("DownloadID " + downloadID + ": Creating duplicate copies...");
	for (var i=0; i<Object.keys(imgCounts).length; i++) {
		const fileName = Object.keys(imgCounts)[i];
		const count = imgCounts[fileName].count;
		const splitName = fileName.split(".");
		for (var j=1; j<count; j++) {
			const dupName = splitName[0] + "-" + j + "." + splitName[1];
			const imgPath = "./static/tmp/" + container + dupName;
			const onExistsMsg = "DownloadID " + downloadID + ": Found " + dupName + ", a cached copy of " + fileName + ", don't duplicate";
			if (imgCounts[fileName].side === "corp") {
				dupCorpFiles.push(dupName);
			} 
			if (imgCounts[fileName].side === "runner") {
				dupRunnerFiles.push(dupName);
			} 
			// if duplicate missing, make a copy and set the red pixel to make it unique for MPC
			if (doesNotExists(imgPath, onExistsMsg)) {
				const originalImg = "./static/tmp/" + container + fileName;
				const msg = fileName + " being copied to " + dupName;
				await setRedPixel(originalImg, imgPath, j, msg);  // makes a copy
			}
		}
  }

	console.log("DownloadID " + downloadID + ": Duplicates Ready");
	const allCorpFiles = corpFilesNames.concat(dupCorpFiles);
	allCorpFiles.forEach( file => {			
		fs.copyFileSync("./static/tmp/" + container + file, zipDir + "corp/" + file);
	});

	const allRunnerFiles = runnerFileNames.concat(dupRunnerFiles);
	allRunnerFiles.forEach( file => {	
		fs.copyFileSync("./static/tmp/" + container + file, zipDir + "runner/" + file);
	});

	ws.send(JSON.stringify({ "status": "Adding images to zip file...", "reqType": "zip" }));
	console.log("DownloadID " + downloadID + ": Zipping up images...");
	var zipFile = fs.createWriteStream(zipPath);
	var archive = archiver('zip', {
		zlib: { level: 0 }
	});
	zipFile.on('close', function() {
		const fileName = "/tmp/" + zipFileName;
		console.log("DownloadID " + downloadID + ": Zip file ready, " + archive.pointer() + " total bytes");
		console.log("DownloadID " + downloadID + ": Sent " + fileName + " to Session " + ws.id);
		ws.send(JSON.stringify({ "success": true, "downloadLink": fileName, "reqType": "zip" }));
		return;
	});

	archive.pipe(zipFile);
	archive.directory(zipDir, false);
	cardBacks.forEach(file => {
		archive.file(__dirname + "/static/tmp/zip-cache/" + file, { name: file });
	});
	archive.file(__dirname + "/misc/README.txt", { name: "README.txt" });
	archive.finalize();
}

function noop() {}

function heartbeat() {
  this.isAlive = true;
}

const server = app.listen(port, () => {
	console.log('listening on port ' + port);
});

const wss = new SocketServer({ server });
wss.on("connection", (ws) => {
	const id = sessCounter++;
	ws.id = id;
	ws.isAlive = true;
	console.log("Session " + id + " connected");
	ws.send(JSON.stringify({ "sessID": id }));
	ws.on('close', function(code) {
		console.log("Session " + id + " disconnected with " + code);
		clearInterval(ws.timer);
	});
	ws.on('pong', heartbeat);
	ws.timer = setInterval(function() {
		if (ws.isAlive === false) return ws.terminate();
		ws.isAlive = false;
		ws.ping(noop);
	}, 1000);
	sessions[id] = ws;
});