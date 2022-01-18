// let variablenname = wert;
let vorname = "Heinz";
let nachname = 'Gruber';

// Zusammenfügen von Strings mit dem + Operator
let vollerName = vorname + ' ' + nachname;
console.log(vollerName);

// String + irgendwas = string
// 5 + 3 --> 8
// 8 + "hallo" --> 8hallo
// 8hallo + 9 --> 8hallo9
// 8hallo9 + 4 --> 8hallo94
let x = 5 + 3 + "hallo" + 9 + 4;
console.log(x);

let einkaufspreis = 3.2;
let verkaufspreisNetto = 6.2;
let lagerbestand = 6439;
let inventarWert = einkaufspreis * lagerbestand;
console.log("Wert des Inventars: " + inventarWert);
// Backticks
// toFixed(2) formatiert number mit 2 Nachkommastellen
console.log(`Wert des Inventars ${inventarWert.toFixed(2)}`);

// prompt(text für user, defaultwert);
let alter = prompt('Bitte das Alter eingeben', 30);
console.log(alter);