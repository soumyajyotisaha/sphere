/**
** This is the HTTP server for the application
**/
var http = require('http');
var server = http.createServer();
server.on('request', function(request, response) {
	console.log("received a "+request.method+" request, on:"+request.url);
});
server.listen(8000);
console.log("server running.");
