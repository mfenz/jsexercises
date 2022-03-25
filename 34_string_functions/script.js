/**
Strings sind Zeichenketten
Jeder String (in Anführungszeichen) ist ein Objekt der Klasse String
Alle Strings in JS werden entweder in einfachen, doppelten, oder 
    "Backtick" Anführungszeichen geschrieben. 
Alle Strings haben Methoden, z. B. für die Formatierung oder zur Transformation
 */


// Defintion einer String-Variable
let str = "Das ist eine String-Variable";

// Zusammenfügen einzelner Strings
// Der + Operator fügt Strings zusammen
let vollerName = 'Hansi' + ' ' + 'Huber';

// Ein String + Number ergibt einen String
let x = 'A' + 5;
console.log('String + Number:', x); // A5

// Zahl + Zahl + String
let y = 1 + 2 + 'A' + 3 + 4; // '3A34'

/**
 * String Methoden - String Transformation
 */
let s = 'Hello World';
console.log('String ohne Transformation:', s);

// .toUpperCase() wandelt den String in Großbuchstaben um
// --> Strings sind "immutable"
//     das bedeutet, ein String-Objekt ist unveränderbar
//     
s.toUpperCase();
console.log('s nach toUpperCase()', s);

let sUpper = s.toUpperCase();
console.log('uppercase:', sUpper);

// .toLowerCase()
console.log('lowercase:', s.toLowerCase());

// Wie viele Zeichen hat der String?
console.log('length:', s.length);

// Replace - ersetze einen Teil des Strings durch einen anderen String
// .replace() ersetzt nur das erste Vorkommen des gesuchten Strings!
console.log('replace: ersetze l mit x', s.replace('l', 'x'));

// .replaceAll() ersetzt ALLE Vorkommen des gesuchten Strings
console.log('replaceAll: ersetze l mit x', s.replaceAll('l', 'x'));

// startsWith: beginnt ein String mit einem bestimmten Text?
// .startsWith() gibt entweder true oder false zurück
// .startsWith() wird oft innerhalb einer if-Bedingung verwendet
console.log(s, 'startsWith "he":', s.startsWith('he'));
console.log(s, 'startsWith "He":', s.startsWith('He'));

// endsWidth: endet ein String mit einem bestimmten Text?
console.log(s, 'endsWith "ld":', s.endsWith('ld'));
console.log(s, 'endsWith "lD":', s.endsWith('lD'));

// Groß- und Kleinschreibung
let klein = "hello";
let gross = "Hello";
// fangen beide Strings mit "h" an, Groß-Kleinschreibung egal
if(klein.toLowerCase().startsWith('h')){

}
if(gross.toLowerCase().startsWith('h')){

}


// split: Teilt Strings anhand eines Trennzeichens auf
// "Hello World".split(" ") --> ["Hello", "World"]
console.log('split mit Leerzeichen:', s.split(' '));
console.log('split mit "o":', s.split('o'));
console.log('split mit "el":', s.split('el'));

// indexOf: an welchem Index befindet sich ein bestimmter String?
console.log('index of ll:', s.indexOf('ll'));

// lastIndexOf: vom Ende gesehen: an welchem Index befindet sich ein bestimmter String
console.log('lastIndexOf l', s.lastIndexOf('l'));

// Dateiendung herausfinden
let file = 'my.cute.dog.jpg';
// bestimmte die Position des letzten Punktes
let indexDot = file.lastIndexOf('.');
// hole mit substring einen Teil eines Strings heraus
// substring gibt den Teilstring ab dem gegebenen Index zurück
let fileType = file.substring(indexDot+1);
console.log(file, fileType);

// Operator-Priorität: https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// String-Vergleich mit ==
// ist s gleich wie "hello world"? 
let eq = s == "hello world";

// sind zwei Strings ungleich?
"a" != "b"


// charAt(i): Gibt das einzelne Zeichen am übergebene Index zurück
console.log('Zeichen am Index 3:', s.charAt(3));