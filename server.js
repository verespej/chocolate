var express = require('express');
var compression = require('compression')();

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(compression);

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
	console.log('Listening on ' + port);
});

