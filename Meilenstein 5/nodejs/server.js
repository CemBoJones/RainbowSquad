var http = require('http');
var querystring = require('querystring');


http.createServer(function (request, response){
	console.log('User connected to Server');

	//Array für die URL-Parameter
	var requestQueryParameters;

	Array für die Formulardaten
	var parameterList = new Array();


	requestQueryParameters = querystring.parse(request.url.replace(/^.*\?/, ''));
	console.log(requestQueryParameters);

	//Array mit den Formulardaten befüllen
	parameterList[0] = requestQueryParameters['vorname'] + ' ' + requestQueryParameters['name'];
	parameterList[1] = requestQueryParameters['jahr'];
	parameterList[2] = requestQueryParameters['hcoach'];
	parameterList[3] = requestQueryParameters['acoach'];
	parameterList[4] = requestQueryParameters['position'];
	parameterList[5] = requestQueryParameters['number'];
	console.log(parameterList);

	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Sie haben sich erfolgreich auf den WebServer mit der Url <192.168.178.28:3000> verbunden');
}).listen(3000, '192.168.178.28');