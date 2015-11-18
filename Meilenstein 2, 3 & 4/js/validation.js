var alertMessage = "Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben";

function validation() {
    var vorname = document.player_entry.vorname;
    var name = document.player_entry.name;
    var verein = document.player_entry.verein;
    var hcoach = document.player_entry.hcoach;
    var acoach = document.player_entry.acoach;
    var number = document.player_entry.number;
    var jahr = document.player_entry.jahr;

    if (validateYear(jahr)&validateNumber(number)&validateText(acoach) & validateText(hcoach) & validateText(verein) & validateText(name) & validateText(vorname)) {
        return true;
    } else {alert(alertMessage);
    return false;
           }
}

function validateText(text) {
    var validChars = /^[a-zß-üA-ZÄ-Ü]+$/;
    if (text.value.match(validChars)) {
        text.style.removeProperty("border");
        return true;
    } else {
        return errorHandler(text);
    }
}

function validateNumber(number) {
    if (number.value>=4&&number.value<=15) {
        number.style.removeProperty("border");
        return true;
    } else {
        return errorHandler(number);
    }
}

function validateYear(year) {
    if (year.value>=0&&year.value<=2015&&year.value!="") {
        year.style.removeProperty("border");
        return true;
    } else {
        return errorHandler(year);
    }
}

function errorHandler(text) {
    text.style.borderColor = "red";
    text.focus();
    return false;
}