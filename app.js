const port = process.env.PORT || 8000;
var fs  = require('fs');
var express = require("express");
var app = express();
app.use(express.static('static'));

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PDFDocument = require('pdfkit');

const IMAGE_SOURCE = 'static/';

function cmToPt (cm) {
	return cm * 28.3465;
}

const cardwidth = 6.35;
const cardheight = 8.80;

const cardwidthPt = cmToPt(cardwidth);
const cardheightPt = cmToPt(cardheight);

const leftMargin = 36;
const topMargin = 21;

app.post('/api/makePDF', function (req, res) {

	const pageType = req.body.pageType;
	const quality = req.body.quality;
	const imageDir = ((q) => {
		switch(q) {
			case 'high':
				return 'images/';
			case 'medium'	:
				return 'mediumQImages/';
		}
	})(quality);
	const requestedImages = req.body.requestedImages;

	// check if requestedImages is empty, return early is so. 

	const doc = new PDFDocument({
		size: pageType,
		autoFirstPage: false,
	});

	doc.pipe(fs.createWriteStream('output.pdf'));

	var rowCount = 0;
	var colCount = 0;

	doc.addPage();
	drawCutLines(doc);
	requestedImages.forEach(code => {
		const path = IMAGE_SOURCE + imageDir + code + ".jpg";
		const x = rowCount*cardwidthPt + leftMargin;
		const y = colCount*cardheightPt + topMargin;

		doc.image(path, x, y, {width: cardwidthPt, height: cardheightPt});
		rowCount++;

		if (rowCount > 2) {
			rowCount = 0;
			colCount++;
		}
		if (colCount > 2) {
			colCount = 0;
			doc.addPage();
			drawCutLines(doc);
		}
	});

	doc.end();
	res.status(200);
	var result = {}
	result.success = true;
	res.json(result);
});

function drawCutLines(doc) {
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

app.listen(port, () => {
	console.log('listening on port ' + port);
});