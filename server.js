var app = require('express')();

app.get('/', function(req, res) {
	res.send('Hello!');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
	console.log('Listening on ' + port);
});

