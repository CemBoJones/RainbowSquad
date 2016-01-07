/**
 * Variable, die das http-Modul importiert
 */
var http = require('http');

/**
 * Variable für die IP Adresse
 */
var ip = '127.0.0.1';

/**
 * Variable, die das querystring-Modul importiert
 */
var querystring = require('querystring');

/**
 * Variable, die das fs-Modul importiert
 */
var fs = require('fs');

/**
 * Variable, die das os-Modul importiert (beinhaltet betriebssystemspezifische Formatierungsmöglichkeiten)
 */
var os = require("os");

//Erstellung des Servers, mit Verhalten bei Requestverarbeitung
http.createServer(function (request, response) {
    
    /**
     * Variable für das Parsen des Querystrings
     */
    var requestQueryParameters;

    /**
     * Variable für den Inhalt der Formularelemente in der Richtigen Reihenfolge
     */
    var parameterList;

    //Parsen der Request-URL in einen Querystring
    requestQueryParameters = querystring.parse(request.url.replace(/^.*\?/, ''));

    //Füllen des Strings mit Formulardaten in der richtigen Reihenfolge
 if(requestQueryParameters['acoach']!=undefined) {  parameterList = requestQueryParameters['vorname'] + ' ' + requestQueryParameters['name'] + ', ' + requestQueryParameters['jahr'] + ', ' + requestQueryParameters['hcoach'] + ', ' + requestQueryParameters['acoach'] + ', ' + requestQueryParameters['position'] + ', ' + requestQueryParameters['number'] + os.EOL;

    //Anfügen der Formulardaten an die Textdatei
    fs.appendFile('form.txt', parameterList);

    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });}
    response.end('Sie haben sich erfolgreich auf den WebServer mit der Url <' + ip + ':3000> verbunden');
}).listen(3000, ip);

console.log('User connected to Server');
