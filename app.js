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
	const leftMargin = 32;
	const topMargin = 18;

	doc.addPage();
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
		}
	});

	doc.end();
	res.status(200);
	var result = {}
	result.success = true;
	res.json(result);
});

app.listen(port, () => {
	console.log('listening on port ' + port);
});