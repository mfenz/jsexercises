let application_title = "Das kleine 1x1";
let applicationTitle = "Das kleine 1x1";
console.log(applicationTitle);

// Definition einer Variable: 
// lasse den multiplikator gleich 1 sein
// let <-- neue Variable anlegen
let multiplikator = 1;
let multiplikand = 5;
let ergebnis = multiplikator * multiplikand;
let ausgabe = multiplikator + " x" + multiplikand + " = " + ergebnis;
console.log(ausgabe);

// Suche das HTML-Element mit der ID multiplikationstabelle
// und speichere es auf der Variable mit dem Namen "div"
let div = document.getElementById("multiplikationstabelle");
// setze den Inhalt des HTML-Elements:
// Nehme was momentan auf textContent drauf steht her, 
// und füge den Inhalt der Variable ausgabe hinten an
// und schreibe beides zusammen wieder auf textContent
div.textContent = div.textContent + ausgabe;

multiplikator = multiplikator + 1;
ergebnis = multiplikator * multiplikand;
console.log(multiplikator + " x " + multiplikand + " = " + ergebnis);
div.textContent = div.textContent + multiplikator + " x " + multiplikand + " = " + ergebnis;
