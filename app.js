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
	BlobURL,
	BlockBlobURL,
	ContainerURL,
	ServiceURL,
	StorageURL,
	SharedKeyCredential,
	AnonymousCredential,
	TokenCredential,
	downloadBlobToBuffer
  } = require("@azure/storage-blob");

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const STORAGE_ACCOUNT_NAME = process.env.AZURE_STORAGE_ACCOUNT_NAME;
const ACCOUNT_ACCESS_KEY = process.env.AZURE_STORAGE_ACCOUNT_ACCESS_KEY;
const ONE_MINUTE = 60 * 1000;

const PDFDocument = require('pdfkit');

const IMAGE_SOURCE = 'static/';

function cmToPt (cm) {
	return cm * 28.3465;
}

const cardwidth = 6.35;
const cardheight = 8.80;

const cardwidthPt = cmToPt(cardwidth);
const cardheightPt = cmToPt(cardheight);

app.post('/api/makePDF', function (req, res) {

	const paperSize = req.body.paperSize;
	const quality = req.body.quality;
	const imageDir = ((q) => {
		switch(q) {
			case 'high':
				return 'images/';
			case 'medium'	:
				return 'medImages/';
		}
	})(quality);
	const requestedImages = req.body.requestedImages;

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
	if (paperSize === 'letter') {
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
		autoFirstPage: false,
		margins: {
			top: topMargin,
			bottom: topMargin,
			left: leftMargin,
			right: leftMargin
		  }
	});

	doc.pipe(fs.createWriteStream('output.pdf'));

	var rowCount = 0;
	var colCount = 0;



	// console.log("Containers:");
    // await showContainerNames(aborter, serviceURL);

	// doc.addPage();
	// makeFrontPage(doc);
	doc.addPage();
	drawCutLines(doc, leftMargin, topMargin);

	
	addImage(doc);



	// requestedImages.forEach(code => {
	// 	const path = IMAGE_SOURCE + imageDir + code + ".jpg";
	// 	const x = rowCount*cardwidthPt + leftMargin;
	// 	const y = colCount*cardheightPt + topMargin;

	// 	// TODO check that code is valid, i.e. image exists. 
	// 	doc.image(path, x, y, {width: cardwidthPt, height: cardheightPt});
	// 	rowCount++;

	// 	if (rowCount > 2) {
	// 		rowCount = 0;
	// 		colCount++;
	// 	}
	// 	if (colCount > 2) {
	// 		colCount = 0;
	// 		doc.addPage();
	// 		drawCutLines(doc, leftMargin, topMargin);
	// 	}
	// });

	doc.end();
	res.status(200);
	var result = {}
	result.success = true;
	res.json(result);
});

async function addImage(doc) {

	const containerName = "demo";
	const blobName = "01001.jpg";
	
	const credentials = new SharedKeyCredential(STORAGE_ACCOUNT_NAME, ACCOUNT_ACCESS_KEY);
  const pipeline = StorageURL.newPipeline(credentials);
	const serviceURL = new ServiceURL(`https://${STORAGE_ACCOUNT_NAME}.blob.core.windows.net`, pipeline);
	
	const containerURL = ContainerURL.fromServiceURL(serviceURL, containerName);
	const blockBlobURL = BlockBlobURL.fromContainerURL(containerURL, blobName);
	
	const aborter = Aborter.timeout(30 * ONE_MINUTE);

	console.log(`Blobs in "${containerName}" container:`);
	await showBlobNames(aborter, containerURL);

	// const downloadResponse = await blockBlobURL.download(aborter, 0);
	// const downloadedContent = downloadResponse.readableStreamBody.read(downloadResponse.contentLength);
	// console.log(`Downloaded blob content: "${downloadedContent}"`);


	// const downloadResponse = await blockBlobURL.download(aborter, 0);
	// const downloadedContent = downloadResponse.readableStreamBody.read(5000).toString();
	// console.log(`Downloaded blob content: "${downloadedContent}"`);
	// const body = await streamToString(response.readableStreamBody);
	// doc.image(downloadedContent, 0, 0, {width: cardwidthPt, height: cardheightPt});
}

async function showBlobNames(aborter, containerURL) {

	let response;
	let marker;

	do {
			response = await containerURL.listBlobFlatSegment(aborter);
			marker = response.marker;
			for(let blob of response.segment.blobItems) {
					console.log(` - ${ blob.name }`);
			}
	} while (marker);
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