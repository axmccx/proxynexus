const port = process.env.PORT || 8000;
var fs  = require('fs');
var express = require("express");
var app = express();
app.use(express.static('static'));

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const {
	Aborter,
	BlockBlobURL,
	ContainerURL,
	ServiceURL,
	StorageURL,
	SharedKeyCredential,
	downloadBlobToBuffer
  } = require("@azure/storage-blob");

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const STORAGE_ACCOUNT_NAME = process.env.AZURE_STORAGE_ACCOUNT_NAME;
const ACCOUNT_ACCESS_KEY = process.env.AZURE_STORAGE_ACCOUNT_ACCESS_KEY;
const ONE_MINUTE = 60 * 1000;

const PDFDocument = require('pdfkit');

function cmToPt (cm) {
	return cm * 28.3465;
}

var IDCounter = 1;

const cardwidth = 6.35;
const cardheight = 8.80;

const cardwidthPt = cmToPt(cardwidth);
const cardheightPt = cmToPt(cardheight);

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
		res.status(200);
		var result = {}
		result.success = false;
		result.reason = "No images requested";
		res.json(result);
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
		res.status(200);
		var result = {}
		result.success = false;
		result.reason = "Invalid paper size";
		res.json(result);
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

  res.setHeader('Content-type', 'application/pdf');
  res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Content-disposition', 'attachment; filename=ProxyNexus.pdf');
	
	doc.pipe(res);
	makeFrontPage(doc);
	doc.addPage();
	drawCutLines(doc, leftMargin, topMargin);

	console.log(Date() + " DownloadID: " + downloadID + " Doc ready, about to fetch images");

	fetchImages(requestedImages, container, downloadID)
		.then(imgBufferList => {
			console.log(Date() + " DownloadID: " + downloadID + " Images fetched, adding them to doc");
			addImages(imgBufferList, doc, leftMargin, topMargin);
			doc.end();
			console.log(Date() + " DownloadID: " + downloadID + " sending doc to client");
		})
		.catch(err => {
			doc.end();
			console.log("Error fetching images");
			console.log(err);
		})
});

function addImages(lst, doc, leftMargin, topMargin) {
	var rowCount = 0;
	var colCount = 0;

	lst.forEach((buffer, i) => {
		const x = rowCount*cardwidthPt + leftMargin;
		const y = colCount*cardheightPt + topMargin;

		doc.image(buffer, x, y, {width: cardwidthPt, height: cardheightPt});
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
}

async function fetchImages(requestedImages, container, downloadID) {
	// TODO check that code is valid, i.e. image exists. 	
	const credentials = new SharedKeyCredential(STORAGE_ACCOUNT_NAME, ACCOUNT_ACCESS_KEY);
  const pipeline = StorageURL.newPipeline(credentials);
	const serviceURL = new ServiceURL(`https://${STORAGE_ACCOUNT_NAME}.blob.core.windows.net`, pipeline);
	const containerURL = ContainerURL.fromServiceURL(serviceURL, container);

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

	console.log(Date() + " DownloadID: " + downloadID + " Code list ready, fetching images");

	const imgPromiseList = imgCodeList.map(async code => {
		const blobName = code + '.jpg';
		const blockBlobURL = BlockBlobURL.fromContainerURL(containerURL, blobName);
		var aborter = createAborter();
		const downloadResponse = await blockBlobURL.download(aborter, 0);
		// aborter.abort();

		// aborter = createAborter();
		const fileSize = downloadResponse.contentLength;
		const buffer = Buffer.alloc(fileSize);
		await downloadBlobToBuffer(
			aborter,
			buffer,
			blockBlobURL,
			0,
			undefined,
			{
				blockSize: 4 * 1024 * 1024, // 4MB block size
				parallelism: 20, // 20 concurrency
				progress: ev => console.log("DocumentID: " + downloadID + ", LoadedBytes: " + ev.loadedBytes)
			}
		);
		aborter.cancelTimer();
		return buffer;
	});

	const imgBufferList = await Promise.all(imgPromiseList);

	return imgBufferList;
}

function createAborter() {
	return Aborter.timeout(30 * ONE_MINUTE);
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
}

app.listen(port, () => {
	console.log('listening on port ' + port);
});