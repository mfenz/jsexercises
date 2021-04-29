// 1 x 1 = 2
// 1 x 2 = 2
// 1 x 10 = 10

let zahl1 = 1;
let zahl2 =  4;//prompt('Bitte die Zahl eingeben:', 1);

let ergebnis = zahl1 * zahl2;
// 1 x 1 = 1
console.log(`${zahl1} x ${zahl2} = ${ergebnis}`);
// Funktion showRechenergebnis mit einem Argument aufrufen
showRechenergebnis(`${zahl1} x ${zahl2} = ${ergebnis}`);

zahl1 = zahl1 + 1; // Erhöhen die Variable um 1
ergebnis = zahl1 * zahl2;
// 2 x 1 = 2
console.log(`${zahl1} x ${zahl2} = ${ergebnis}`);
showRechenergebnis(`${zahl1} x ${zahl2} = ${ergebnis}`);

zahl1 = zahl1 + 1; // Erhöhen die Variable um 1
ergebnis = zahl1 * zahl2;
console.log(`${zahl1} x ${zahl2} = ${ergebnis}`);

zahl1 = zahl1 + 1; // Erhöhen die Variable um 1
ergebnis = zahl1 * zahl2;
console.log(`${zahl1} x ${zahl2} = ${ergebnis}`);

zahl1 = zahl1 + 1; // Erhöhen die Variable um 1
ergebnis = zahl1 * zahl2;
console.log(`${zahl1} x ${zahl2} = ${ergebnis}`);

zahl1 = zahl1 + 1; // Erhöhen die Variable um 1
ergebnis = zahl1 * zahl2;
console.log(`${zahl1} x ${zahl2} = ${ergebnis}`);

zahl1 = zahl1 + 1; // Erhöhen die Variable um 1
ergebnis = zahl1 * zahl2;
console.log(`${zahl1} x ${zahl2} = ${ergebnis}`);

zahl1 = zahl1 + 1; // Erhöhen die Variable um 1
ergebnis = zahl1 * zahl2;
console.log(`${zahl1} x ${zahl2} = ${ergebnis}`);

zahl1 = zahl1 + 1; // Erhöhen die Variable um 1
ergebnis = zahl1 * zahl2;
console.log(`${zahl1} x ${zahl2} = ${ergebnis}`);

zahl1 = zahl1 + 1; // Erhöhen die Variable um 1
ergebnis = zahl1 * zahl2;
console.log(`${zahl1} x ${zahl2} = ${ergebnis}`);

// Schlüsselwort function, dann Name der Funktion
// in den runden Klammern: Übergabeparameter
// 1 Parameter: ergebnisText
function showRechenergebnis(ergebnisText)
{
    // HTML Element (Knoten) erstellen --> <p>
    let pAusgabe = document.createElement('p');
    // Text für <p> Element setzen (von Übergabeparameter)
    pAusgabe.textContent = ergebnisText;

    // Style verändern
    pAusgabe.style.color = "red";
    pAusgabe.style.border = "3px solid blue";
    pAusgabe.style.padding = "5px";
    pAusgabe.style.textDecoration = "underline";

    // <body> finden und darauf referenzieren
    let body = document.querySelector('body');
    // mit .appendChild(element) das neue Element
    // am Ende des "Containers" einfügen
    body.appendChild(pAusgabe);
}