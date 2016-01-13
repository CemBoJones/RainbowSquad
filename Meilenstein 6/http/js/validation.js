/**
 * Benachrichtigung, wenn fehlerhafte Eingaben vorliegen
 */
var alertMessage = "Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben";

/**
 * Funktion in der die zu prüfenden HTML-Elemente extrahiert und auf fehlerhaften Werten überprüft werden
 */
function validation() {
    //Extrahierung der einzelnen HTML-Elementen
    var vorname = document.player_entry.vorname;
    var name = document.player_entry.name;
    var verein = document.player_entry.verein;
    var hcoach = document.player_entry.hcoach;
    var acoach = document.player_entry.acoach;
    var number = document.player_entry.number;
    var jahr = document.player_entry.jahr;

    //Prüfung auf Richtigkeit der Werte
    if (validateYear(jahr)&validateNumber(number)&validateText(acoach) & validateText(hcoach) & validateText(verein) & validateText(name) & validateText(vorname)) {
        return true;
    } else {alert(alertMessage);
    return false;
           }
}

/**
 * Funktion zum Prüfen der Textfelder auf invalide Werte
 */
function validateText(text) {
    var validChars = /^[a-zß-üA-ZÄ-Ü]+$/;
    if (text.value.match(validChars)) {
        text.style.removeProperty("border");
        return true;
    } else {
        return errorHandler(text);
    }
}

/**
 * Funktion zum Prüfen der Nummernfelder auf invalide Werte
 */
function validateNumber(number) {
    if (number.value>=4&&number.value<=15) {
        number.style.removeProperty("border");
        return true;
    } else {
        return errorHandler(number);
    }
}

/**
 * Funktion zum Prüfen des Feldes für den Jahrgang auf invalide Werte
 */
function validateYear(year) {
    if (year.value>=0&&year.value<=2015&&year.value!="") {
        year.style.removeProperty("border");
        return true;
    } else {
        return errorHandler(year);
    }
}

/**
 * Funktion, die das Verhalten des Eingabefelder, bei auftretenden Fehlern bestimmt
 */
function errorHandler(text) {
    text.style.borderColor = "red";
    text.focus();
    return false;
}