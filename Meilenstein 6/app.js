/**
 * Variable für die lokale IP-Adresse
 */
var ip = '127.0.0.1';

/**
 * Variable für den lokalen Port
 */
var port='3000';

/**
 * Variable, die das fs-Modul importiert
 */
var fs = require('fs');

/**
 * Variable, die das express-Modul importiert
 */
var express = require('express');
var app = express();

/**
 * Variable, die das body-parser-Modul importiert
 */
var bodyParser = require('body-parser');

/**
 * Variable, die das path-Modul importiert
 */
var path = require('path');

/**
 * Variable, die das data-Modul importiert
 */
var data = require('./data.json');

/**
 * Konfiguration der Express App und des Body-Parser Moduls
 */
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "http")));

/**
 * Initialisieren des Wurzelverzeichnises des Webservers
 */
app.get('/', function(req, res){
    res.sendFile(__dirname+'/http/home.html');
});

/**
*API 'GET' für die URL <ip>:<port>/AllPlayers
*/
app.get('/AllPlayers', function (req, res) {
    
    //Liefert die Liste der Spieler als JSON
    res.json(data);
});

/**
*API 'GET' für die URL <ip>:<port>/Favorites
*/
app.get('/Favorites', function (req, res) {
    var favorites = [];
    
    //Extrahieren der Favoriten-Spieler
    for (var i = 0; i < data.length; i++) {
        
        //Überprüfen ob der Spieler ein Favorit ist oder nicht
        if (data[i]["isFavorite"]) {
            favorites.push(data[i]);
        }
    }
    
    //Liefert die Liste der Favoriten-Spieler als JSON
    res.json(favorites);
})

/**
*API 'PUT' für die URL <ip>:<port>/Player
*/
app.put('/Player', function(req, res){

    //Extrahieren der Formulardaten
    var player_entry = req.body["vorname"] + " " + req.body["name"] + ", " + req.body["jahr"] + ", " + req.body["hcoach"] + ", " + req.body["acoach"] + ", " + req.body["position"] + ", " + req.body["number"] + "\r\n";
    
    //Hinzufügen der Formulardaten an die Textdatei
    fs.appendFile('form.txt', player_entry, function (err) {
        if (err) throw err;
    });
    res.end();
});
app.listen(port);
console.log('User connected to Server');

