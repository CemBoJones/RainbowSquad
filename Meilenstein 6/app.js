/**
 * Diverse Variablen initialisiert
 */
var ip = '127.0.0.1';
var port='3000';
var fs = require('fs');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var data = require('./data.json');

/**
 * Konfiguration der Express App und des Body-Parser Moduls
 */

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "http")));

/**
 * Initialisieren des Stammverzeichnises der Website>
 */
app.get('/', function(req, res){
    res.sendFile(__dirname+'/http/home.html');
});

/**
*API 'GET' für die URL <ip>:<port>/AllPlayers
*/
app.get('/AllPlayers', function (req, res) {
    res.json(data);
});
/**
*API 'GET' für die URL <ip>:<port>/Favorites
*/
app.get('/Favorites', function (req, res) {
    var favorites = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i]["isFavorite"]) {
            favorites.push(data[i]);
        }
    }
    res.json(favorites);
})

app.put('/Player', function(req, res){
    var player_entry = req.body["vorname"] + " " + req.body["name"] + ", " + req.body["jahr"] + ", " + req.body["hcoach"] + ", " + req.body["acoach"] + ", " + req.body["position"] + ", " + req.body["number"] + "\r\n";
    fs.appendFile('form.txt', player_entry, function (err) {
        if (err) throw err;
    });
    res.end();
});
app.listen(port);
console.log('User connected to Server');

