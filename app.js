const port = process.env.PORT || 8000;
var express = require("express");
var app = express();
app.use(express.static('static'));

app.listen(port, () => {
	console.log('listening on port ' + port);
});