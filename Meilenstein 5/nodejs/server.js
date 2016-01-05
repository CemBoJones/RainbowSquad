var http = require('http');
var querystring = require('querystring');


http.createServer(function (request, response){
	console.log('User connected to Server');

	var requestQueryParameters;
	requestQueryParameters = querystring.parse(request.url);
	console.log(requestQueryParameters);

	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Sie haben sich erfolgreich auf den WebServer mit der Url <192.168.178.28:3000> verbunden');
}).listen(3000, '192.168.178.28');