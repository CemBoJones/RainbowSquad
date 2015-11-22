var xmlhttp = new XMLHttpRequest();
var url = "js/data.json";

xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
        document.getElementById("playerTable").appendChild(myFunction(myArr));
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
    var tblBody = document.createElement("tbody");

    // creating all hcells
    for (i = 0; i < arr.length; i++) {
        // creates a table row
        var row = document.createElement("tr");

        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
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

        //add Class isFav or isNotFav
        if(arr[i]["isFavorite"]){
            row.classList.add("isFav");
        }else{
            row.classList.add("isNotFav");
        }
        
        // add the row to the end of the table body
        tblBody.appendChild(row);
    }
    return tblBody;
}

document.getElementById("all").onclick = function () {
    select("all");
};

document.getElementById("favorite").onclick = function () {
    select("favorite");
};

function select(tab) {
    var playerVisible = document.getElementsByClassName("isNotFav");
    
    if (tab == "all") {
        document.getElementById("all").classList.add("selected");
        document.getElementById("favorite").classList.remove("selected");
        
        for(var i=0; i < playerVisible.length; i++){
            playerVisible[i].classList.remove("invisible");
        }
    } else {
        document.getElementById("favorite").classList.add("selected");
        document.getElementById("all").classList.remove("selected");
        
        for(var i=0; i < playerVisible.length; i++){
            playerVisible[i].classList.add("invisible");
        }
    }
}