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

// if (process.env.NODE_ENV !== "production") {
//     require("dotenv").config();
// }

function cmToPt (cm) {
	return cm * 28.3465;
}
var IDCounter = 1;
const cardwidth = 6.35;
const cardheight = 8.80;
const cardwidthPt = cmToPt(cardwidth);
const cardheightPt = cmToPt(cardheight);

// setInterval(function() {
// 	const used = process.memoryUsage();
// 	for (let key in used) {
// 		console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
// 	}
// }, 100);

app.post('/api/makePDF', function (req, res) {
	const paperSize = req.body.paperSize;
	const quality = req.body.quality;
	const logInfo = req.body.logInfo;
	const container = ((q) => {
		switch(q) {
			case 'High':
				return 'images';
			case 'Medium':
				return 'med-images';
		}
	})(quality);
	const requestedImages = req.body.requestedImages;
	const downloadID = IDCounter;
	IDCounter = IDCounter + 1;
	console.log(Date() + " NEW DownloadID: " + downloadID + "; Papersize: " + paperSize + ", Quality: " + quality + ", " + logInfo);
	
	if (requestedImages.length == 0) {
		console.error("No images requested");
		res.status(200);
		var result = {}
		result.success = false;
		result.errorMsg = "No images requested";
		res.json(result);
		return;
	}

	const requestedPDFOptions = paperSize + quality + requestedImages;
	const hash = crypto.createHash('sha1').update(requestedPDFOptions).digest('hex');
	const pdfPath = __dirname + "/static/tmp/" + hash + ".pdf";

	console.log(Date() + " DownloadID: " + downloadID + "; PDF Name: " + hash + ".pdf");

	if (fs.existsSync(pdfPath)) {
		console.log(Date() + " DownloadID: " + downloadID + "; PDF already exists, no need to generate");
		res.status(200);
		var result = {}
		result.success = true;
		result.fileName = "/tmp/" + hash + ".pdf";
		res.json(result);
		console.log(Date() + " DownloadID: " + downloadID + "; Download link sent to client");
		return;
	}

	if (paperSize === 'A4') {
		var leftMargin = 30;
		var topMargin = 46;
	}
	else if (paperSize === 'Letter') {
		var leftMargin = 36;
		var topMargin = 21;
	} else {
		console.error("Invalid paper size");
		res.status(200);
		var result = {}
		result.success = false;
		result.errorMsg = "Invalid paper size";
		res.json(result);
		return;
	}

	var doc = new PDFDocument({
		size: paperSize,
		margins: {
			top: topMargin,
			bottom: topMargin,
			left: leftMargin,
			right: leftMargin
		  }
	});

	fetchImages(requestedImages, doc, container, pdfPath, downloadID, topMargin, leftMargin, res, hash);
});

async function fetchImages(requestedImages, doc, container, pdfPath, downloadID, topMargin, leftMargin, res, hash) {	

	var imgCodeList = [...requestedImages];
	const biotechIndex = imgCodeList.indexOf("08012");
	if (biotechIndex >= 0) {
		const extraCodes = ["08012a", "08012", "08012b", "08012", "08012c"];
		imgCodeList.splice(biotechIndex + 1, 0, ...extraCodes);
	}
	const syncIndex = imgCodeList.indexOf("09001");
	if (syncIndex >= 0) {
		imgCodeList.splice(syncIndex + 1, 0, "09001a");
	}

	console.log(Date() + " DownloadID: " + downloadID + "; Code list ready, Fetching images...");

	const imgPromises = imgCodeList.map( async code => {
		const imgPath = "./static/tmp/" + code + ".jpg";
		const url = "https://proxynexus.blob.core.windows.net/" + container + "/" + code + ".jpg";
		const res = await fetch(url);
		const fileStream = fs.createWriteStream(imgPath);
		return new Promise((resolve, reject) => {
			res.body.pipe(fileStream);
			res.body.on("error", (err) => {
				reject(err);
			});
			fileStream.on("finish", function() {
				resolve();
			});
		});
	});

	await Promise.all(imgPromises);

	console.log(Date() + " DownloadID: " + downloadID + "; Adding images to doc...");

	doc.pipe(fs.createWriteStream(pdfPath));
	makeFrontPage(doc);
	doc.addPage();
	drawCutLines(doc, leftMargin, topMargin);
	addImages(requestedImages, doc, leftMargin, topMargin);
	doc.end();

	res.status(200);
	var result = {}
	result.success = true;
	result.fileName = "/tmp/" + hash + ".pdf";
	res.json(result);

	console.log(Date() + " DownloadID: " + downloadID + "; Download link sent to client");
	return;
}

function addImages(lst, doc, leftMargin, topMargin) {
	var rowCount = 0;
	var colCount = 0;

	lst.forEach((code, i) => {
		const x = rowCount*cardwidthPt + leftMargin;
		const y = colCount*cardheightPt + topMargin;
		const imgPath = "static/tmp/" + code + ".jpg";

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

function makeFrontPage(doc) {
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
	return;
}

app.listen(port, () => {
	console.log('listening on port ' + port);
});