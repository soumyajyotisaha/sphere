/**
** This is the HTTP server for the application
**/
var http = require('http');
var express = require('express');
var app = express();
app.get("/", function(req, res) {
	res.send("Hello world!");
});
app.listen(3000, function() {
	console.log("app listening on 3000!");
});
