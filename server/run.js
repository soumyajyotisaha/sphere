/**
** This is the HTTP server for the application
**/
var http = require('http');
var server = http.createServer();
server.on('request', function(request, response) {});
server.listen(8000);
