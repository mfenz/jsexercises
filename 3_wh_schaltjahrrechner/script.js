
let jahr = prompt('Jahreszahl eingeben:');

/**
 * Wenn ... dann --> if conditions (if Verzweigungen)
 * 
 * if(BEDINGUNG)
 * {
 * 
 * }
 * 
 * --> damit der Code in den geschwungen Klammern nach dem if ausgeführt wird,
 *     muss die Bedingung erfüllt (true) sein. 
 * 
 * Bedingung ist ein Wahrheitswert - vom Datentyp boolean
 * string: Zeichenkette (Text)
 * boolean: Wahrheitswert - entweder true oder false
 * number: Irgend eine Zahl
 * 
 * Vergleichsoperatoren:
 * < kleiner
 * if(jahr < 2000)
 * {
 * 
 * }
 * 
 * > größer
 * if(jahr > 2000)
 * {
 * // entweder
 * }
 * else 
 * {
 * // oder 
 * }
 * 
 * ... nur 1x if und 1x else, aber dazwischen können viele if else sein!
 * 
 * 
 * = ist der Zuweisungsoperator --> weise ich einer Variable einen Wert zu
 * == ist der Gleichheitsoperator --> frage ich ob die Variable den Wert hat
 * 
 */

// Quelle: https://www.umrechnung.org/zeit-datum-kalender/schaltjahr.htm
// Bedingung: Jahr muss restlos durch 4 teilbar sein, dann Schaltjahr
if(jahr % 4 == 0)
{
    console.log(`${jahr} ist ein Schaltjahr!`);
} 
else if(jahr % 100 == 0)
{
    console.log(`${jahr} ist kein Schaltjahr!`);
}
else if(jahr % 400 == 0)
{
    console.log(`${jahr} ist ein Schaltjahr!`);
} 
else 
{
    console.log(`${jahr} ist kein Schaltjahr!`);
}