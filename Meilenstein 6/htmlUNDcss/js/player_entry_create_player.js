function submitform(validated) {

    if (!validated) {} else {
    
        alert("Spieler wurde eingetragen :)");
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("PUT", "http://127.0.0.1:3000/Player", true);
        xmlhttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

        var vorname = document.player_entry.vorname.value;
        var name = document.player_entry.name.value;
        var jahr = document.player_entry.jahr.value;
        var hcoach = document.player_entry.hcoach.value;
        var acoach = document.player_entry.acoach.value;
        var position = document.player_entry.position.value;
        var number = document.player_entry.number.value;


        var player = {
            "vorname": vorname,
            "name": name,
            "jahr": jahr,
            "hcoach": hcoach,
            "acoach": acoach,
            "position": position,
            "number": number
        };
        xmlhttp.send(JSON.stringify(player));
    }

}