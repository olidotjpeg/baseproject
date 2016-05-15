// Base Setup for the server
var express		= require('express');
var app			= express();
var port 		= 1337;

app.use(express.static(__dirname + '/app'));

app.get('/', function(req, res) {
	res.sendfile('./app/index.html');
});

// Start the server
app.listen(port);
console.log('We are up and running!');
