
// function <-- sagt, dass jetzt eine Funktion definiert wird
// hello <-- Name der Funktion
// () <-- Parameter (hier keine Parameter, weil leere Klammer)
function hello()
{
    console.log("Hello World");
}

console.log('Vor dem Funktionsaufruf');

// Aufruf der Funktion
// Name der Funktion und runde Klammern und ;
hello();
console.log('Nach dem Funktionsaufruf');

// Aufruf der Methode mit 3 Argumenten
calculateVolume(5, 15, 20);
calculateVolume(2, 3, 2);

// Funktion mit 3 Parametern (hoehe, breite, tiefe)
// Name der Funktion: calculateVolume
function calculateVolume(hoehe, breite, tiefe)
{
    let volumen = hoehe * breite * tiefe;
    console.log(`${hoehe} x ${breite} x ${tiefe} = ${volumen}`);
}

// Funktionsaufruf
let laenge = prompt("Länge?", 1);
let breite = prompt("Breite?", 5);
calculateFlaeche(laenge, breite);

// Funktionsdefinition
function calculateFlaeche(laenge, breite)
{
    let flaeche = laenge * breite;
    console.log(`Fläche: ${flaeche}`);
}