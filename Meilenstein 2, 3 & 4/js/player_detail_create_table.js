/**
 * Neues XMLHttpRequest
**/
var xmlhttp = new XMLHttpRequest();

/**
 * JSON-Datei mit Spieler
**/
var url = "js/data.json";

/**
 * Funktion zum Einlesen der JSON-Datei
**/
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
        document.getElementById("playerTable").appendChild(myFunction(myArr));
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

/**
 * Funktion zum Erstellen der Tabelle
**/
function myFunction(arr) {
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

        if (arr[i]["isFavorite"]) {
            row.classList.add("isFav");
        } else {
            row.classList.add("isNotFav");
        }
        tblBody.appendChild(row);
    }
    return tblBody;
}

/**
 * Beim klicken des Tabs "Alle Spieler" soll die Funktion select(tab) aufgerufen werden
**/
document.getElementById("all").onclick = function () {
    select("all");
};

/**
 * Beim klicken des Tabs "Meine Favoriten" soll die Funktion select(tab) aufgerufen werden
**/
document.getElementById("favorite").onclick = function () {
    select("favorite");
};

/**
 * Funktion zum wechseln der Tabellen der beiden Tabs 
**/
function select(tab) {
    var playerVisible = document.getElementsByClassName("isNotFav");

    //Beim klicken des Tabs "Alle Spieler"
    if (tab == "all") {
        document.getElementById("all").classList.add("selected");
        document.getElementById("favorite").classList.remove("selected");

        for (var i = 0; i < playerVisible.length; i++) {
            playerVisible[i].classList.remove("invisible");
        }

    //Beim klicken des Tabs "Meine Favoriten"
    } else {
        document.getElementById("favorite").classList.add("selected");
        document.getElementById("all").classList.remove("selected");

        for (var i = 0; i < playerVisible.length; i++) {
            playerVisible[i].classList.add("invisible");
        }
    }
}