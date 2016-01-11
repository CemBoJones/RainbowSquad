var playertable = document.getElementById("playerTable");
/**
 * Neues XMLHttpRequest
 **/

var ip = "127.0.0.1";
var port = "3000";
var url = "http://" + ip + ":" + port + "/";

document.body.onload = function () {
   
    showTable('AllPlayers');
};

document.getElementById("all").onclick = function () {
    document.getElementById("all").classList.add("selected");
    document.getElementById("favorite").classList.remove("selected");
    showTable('AllPlayers');
};

document.getElementById("favorite").onclick = function () {
    document.getElementById("favorite").classList.add("selected");
    document.getElementById("all").classList.remove("selected");
    showTable('Favorites');
};
/**
 * Funktion zum Einlesen der JSON-Datei
 **/
function showTable(group) {
    if (document.getElementById(group) == null) {
        if (document.getElementById('Favorites') != null) {
            playerTable.removeChild(document.getElementById('Favorites'));
        }
        if (document.getElementById('AllPlayers') != null) {
            playerTable.removeChild(document.getElementById('AllPlayers'));
        }
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", url + group, true);
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200 && (xmlhttp.responseText != null)) {
                var tableContent = JSON.parse(xmlhttp.responseText);
                var players = createTable(tableContent);
                players.setAttribute("id", group);
                playertable.appendChild(players);
            }
        };

        xmlhttp.send();
    }
}

/**
 * Funktion zum Erstellen der Tabelle
 **/
function createTable(arr) {
    var tblBody = document.createElement("tbody");

    //Erstellen der Tabelle, Zeile für Zeile
    for (i = 0; i < arr.length; i++) {
        var row = document.createElement("tr");
        var cell1 = document.createElement("td");
        var cell2 = document.createElement("td");
        var cell3 = document.createElement("td");
        var cell4 = document.createElement("td");
        var cell5 = document.createElement("td");
        var cell6 = document.createElement("td");
        var cell7 = document.createElement("td");
        var cell8 = document.createElement("td");
        var cellName = document.createTextNode(arr[i].firstname + " " + arr[i].surname);
        var cellTeam = document.createTextNode(arr[i].team);
        var cellHcoach = document.createTextNode(arr[i].headcoach);
        var cellAcoach = document.createTextNode(arr[i].asisstantcoach);
        var cellPosition = document.createTextNode(arr[i].position);
        var cellIsActive = document.createTextNode(arr[i].isActive);
        var cellNumber = document.createTextNode(arr[i].number);
        var cellYear = document.createTextNode(arr[i].year);

        //Wahrheitswert zur Aktivität des Spielers wird in Ja oder Nein
        if (cellIsActive.nodeValue == "false") {
            cellIsActive = document.createTextNode("Nein");
        } else {
            cellIsActive = document.createTextNode("Ja");
        }

        //Befüllen der einzelnen Zellen in der Reihe
        cell1.appendChild(cellName);
        cell2.appendChild(cellTeam);
        cell3.appendChild(cellHcoach);
        cell4.appendChild(cellAcoach);
        cell5.appendChild(cellPosition);
        cell6.appendChild(cellIsActive);
        cell7.appendChild(cellNumber);
        cell8.appendChild(cellYear);
        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(cell4);
        row.appendChild(cell5);
        row.appendChild(cell6);
        row.appendChild(cell7);
        row.appendChild(cell8);

        //Kennzeichnet Favoriten und Nicht-Favoriten zum späteren Einordnen in die richtige Tabelle
        if (arr[i]["isFavorite"]) {
            row.classList.add("isFav");
        } else {
            row.classList.add("isNotFav");
        }
        tblBody.appendChild(row);
    }
    return tblBody;
}