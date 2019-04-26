const port = process.env.PORT || 8000;
var fs  = require('fs');
const fetch = require("node-fetch");
var express = require("express");
var app = express();
app.use(express.static('static'));
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PDFDocument = require('pdfkit');
var crypto = require('crypto');

function cmToPt (cm) {
	return cm * 28.3465;
}
var IDCounter = 1;
const cardwidth = 6.35;
const cardheight = 8.80;
const cardwidthPt = cmToPt(cardwidth);
const cardheightPt = cmToPt(cardheight);
const storagePath = "https://proxynexus.blob.core.windows.net/";

app.post('/api/makePDF', function (req, res) {
	// unpack request
	const paperSize = req.body.paperSize;
	const quality = req.body.quality;
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
	console.log("NEW DownloadID: " + downloadID + "; Papersize: " + paperSize + ", Quality: " + quality + ", " + logInfo);
	
	// Catch empty image request, and return error message
	if (requestedImages.length == 0) {
		console.error("DownloadID: " + downloadID + "; No images requested");
		res.status(200);
		var result = {}
		result.success = false;
		result.errorMsg = "No images requested";
		res.json(result);
		return;
	}

	// Catch missing image selection. Container would be null since it won't hit either case in assignment
	if (container == null) {
		console.error("DownloadID: " + downloadID + "; No image quality selected");
		res.status(200);
		var result = {}
		result.success = false;
		result.errorMsg = "No image quality selected";
		res.json(result);
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
		console.error("DownloadID: " + downloadID + "; Invalid paper size");
		res.status(200);
		var result = {}
		result.success = false;
		result.errorMsg = "Invalid paper size";
		res.json(result);
		return;
	}

	// request is good, make hash for request and pdf file name
	const requestedPDFOptions = paperSize + quality + requestedImages + logInfo;
	const hash = crypto.createHash('sha1').update(requestedPDFOptions).digest('hex');
	const pdfFileName = hash + ".pdf";
	const pdfPath = __dirname + "/static/tmp/" + pdfFileName;
	console.log("DownloadID: " + downloadID + "; PDF Name: " + pdfFileName);

	// check if request pdf was already generated, save from re-generating it
	if (fs.existsSync(pdfPath)) {
		console.log("DownloadID: " + downloadID + "; PDF already exists, don't generate");
		res.status(200);
		var result = {}
		result.success = true;
		result.fileName = "/tmp/" + pdfFileName;
		res.json(result);
		console.log("DownloadID: " + downloadID + "; Sent " + result.fileName + " to client");
		return;
	}

	const doc = new PDFDocument({
		size: paperSize,
		margins: {
			top: topMargin,
			bottom: topMargin,
			left: leftMargin,
			right: leftMargin
		  }
	});

	const opt = {
		container: container,
		quality: quality,
		doc: doc,
		downloadID: downloadID,
		pdfFileName: pdfFileName,
		requestedImages: requestedImages,
		pdfPath: pdfPath,
		topMargin: topMargin,
		leftMargin: leftMargin,
		res: res
	};
	fetchImages(opt);
});

async function fetchImages(opt) {	
	const container = opt.container;
	const quality = opt.quality;
	const doc = opt.doc;
	const downloadID = opt.downloadID;
	const pdfFileName = opt.pdfFileName
	const requestedImages = opt.requestedImages;
	const pdfPath = opt.pdfPath;
	const topMargin = opt.topMargin;
	const leftMargin = opt.leftMargin;
	const res = opt.res;

	// Add back side art for flippable IDs
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

	// Strip duplicate and already downloaded image codes, to prevent downloading more than needed
	const imgFileNames = imgCodes.map(code => {return code + ".jpg"});	// used for building document later, need to maintain img count
	const uniqueImgCodes = [...new Set(imgFileNames)];
	const imgCodesToFetch = uniqueImgCodes.filter( code => {
		const imgPath = "./static/tmp/" + container + code;
		try {
			fs.statSync(imgPath);
			console.log("DownloadID: " + downloadID + "; Found cached copy of " + code + ", don't download");
			return false;
		}
		catch (err) {
			if (err.code === 'ENOENT') {
				return true;
			}
		}
	});
	console.log("DownloadID: " + downloadID + "; Code list ready, Fetching images...");

	// Download image files, and wait until all are ready
	try {
		const imgPromises = imgCodesToFetch.map( async code => {
			const imgPath = "./static/tmp/" + container + code;
			const url = storagePath + container + code;
			const imgRes = await fetch(url)
			.then( res => {
				if (!res.ok) {
					throw new Error("Error downloading: " + container + code);
				}
				console.log("DownloadID: " + downloadID + "; Downloaded " + code);
				return res;
			});
			const fileStream = fs.createWriteStream(imgPath);
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
		await Promise.all(imgPromises);
	}
	catch(err) {
		console.error("DownloadID: " + downloadID + "; " + err.message);
		res.status(200);
		var result = {}
		result.success = false;
		result.errorMsg = err.message;
		res.json(result);
		return;
	}

	console.log("DownloadID: " + downloadID + "; Adding images to doc...");
	doc.pipe(fs.createWriteStream(pdfPath));
	makeFrontPage(doc, quality);
	doc.addPage();
	drawCutLines(doc, leftMargin, topMargin);
	addImages(imgFileNames, doc, container, leftMargin, topMargin);
	doc.end();

	res.status(200);
	var result = {}
	result.success = true;
	result.fileName = "/tmp/" + pdfFileName;
	res.json(result);
	console.log("DownloadID: " + downloadID + "; Sent " + result.fileName + " to client");
	return;
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

app.listen(port, () => {
	console.log('listening on port ' + port);
});