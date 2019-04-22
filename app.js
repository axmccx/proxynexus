const port = process.env.PORT || 8000;
var fs  = require('fs');
var express = require("express");
var app = express();
app.use(express.static('static'));

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var crypto = require('crypto');

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
		console.error("No images requested");
		res.status(200);
		var result = {}
		result.success = false;
		result.errorMsg = "No images requested";
		res.json(result);
		return;
	}

	const request = paperSize + quality + requestedImages;
	const hash = crypto.createHash('sha1').update(request).digest('hex');
	const pdfPath = __dirname + "/static/tmp/" + hash + ".pdf";

	console.log(Date() + " DownloadID: " + downloadID + "; PDF Name: " + hash + ".pdf");

	// TODO check for hard coded PDFs in storage here

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

	const doc = new PDFDocument({
		size: paperSize,
		margins: {
			top: topMargin,
			bottom: topMargin,
			left: leftMargin,
			right: leftMargin
		  }
	});

	fetchImages(requestedImages, container, downloadID)
		.then(imgBufferList => {
			console.log(Date() + " DownloadID: " + downloadID + "; Adding images to doc...");

			doc.pipe(fs.createWriteStream(pdfPath));
			makeFrontPage(doc);
			doc.addPage();
			drawCutLines(doc, leftMargin, topMargin);
			addImages(imgBufferList, doc, leftMargin, topMargin);
			doc.end();

			// does nulling the buffer list help free memory?
			imgBufferList = null; 

			res.status(200);
			var result = {}
			result.success = true;
			result.fileName = "/tmp/" + hash + ".pdf";
			res.json(result);

			console.log(Date() + " DownloadID: " + downloadID + "; Download link sent to client");
			return;
		})
		.catch(err => {
			doc.end();
			console.error("Error fetching images");
			console.error(err);
			res.status(200);
			var result = {}
			result.success = false;
			result.errorMsg = "Error fetching images, try again";
			res.json(result);
			return;
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
	return;
}

async function fetchImages(requestedImages, container, downloadID) {	
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

	console.log(Date() + " DownloadID: " + downloadID + "; Code list ready, Fetching images...");

	const imgPromiseList = imgCodeList.map(async code => {
		const blobName = code + '.jpg';
		const blockBlobURL = BlockBlobURL.fromContainerURL(containerURL, blobName);
		var aborter = createAborter();
		const downloadResponse = await blockBlobURL.download(aborter, 0);

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