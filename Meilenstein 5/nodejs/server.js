/**
 * 
 */
var http = require('http');

/**
 * 
 */
var querystring = require('querystring');

/**
 * 
 */
var fs = require('fs');

/**
 * 
 */
var os = require("os");

//
http.createServer(function (request, response){
	console.log('User connected to Server');

	/**
 	* 
 	*/
	var requestQueryParameters;

	/**
 	* 
 	*/
	var parameterList;

	//
	requestQueryParameters = querystring.parse(request.url.replace(/^.*\?/, ''));

	//
	parameterList = requestQueryParameters['vorname'] + ' ' + requestQueryParameters['name'] + ', ' 
	+ requestQueryParameters['jahr'] + ', ' + requestQueryParameters['hcoach'] + ', ' 
	+ requestQueryParameters['acoach'] + ', ' + requestQueryParameters['position'] + ', ' 
	+ requestQueryParameters['number'] + os.EOL;

	//
	fs.appendFile('form.txt', parameterList);

	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Sie haben sich erfolgreich auf den WebServer mit der Url <192.168.178.28:3000> verbunden');
}).listen(3000, '192.168.178.28');