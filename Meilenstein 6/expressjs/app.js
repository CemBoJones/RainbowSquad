var express = require('express');

var app = express();

app.get('127.0.0.1:3000/AllPlayers', function(request, response){
	res.json('allPlayers.json');
});

app.get('127.0.0.1:3000/Favorites', function(request, response){
	res.json('favoritePlayers.json');
});

app.put('127.0.0.1':3000/PLayer, function(request, response){
	if(){
		
	}
})

var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('User connected to Server');
});