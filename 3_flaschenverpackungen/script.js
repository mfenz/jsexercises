/**
 * Regeln für Variablennamen:
 * 1) Variablennamen sollten (meinstens) mit einem Kleinbuchstaben beginnen
 * 2) Variablennamen dürfen NICHT mit einer Zahl beginnen
 * 3) Variablennamen dürfen KEINE Leerzeichen enthalten!
 * --> stattdessen mit Underscore verbinden, oder jedes neue Wort mit einem Großbuchstaben beginnen
 * --> first_name oder firstName
 * 4) Variablennamen sollten keine Umlaute enthalten
 * 5) Variablennamen sollten aussagekräftig sein!
 * --> let x = 15; <-- Schlechtes Beispiel
 * --> let age = 15; <-- besser
 * 6) Variablennamen sollten so kurz wie möglich, aber so lange wie nötig sein
 * --> let ageOfChildrenInMyClassroom = 6;
 * --> let ageInClass = 6;
 */



/**
 * 1) Welche Variablen benötige ich?
 * --> welche Informatione benötigt das Programm damit es arbeiten kann?
 * --> Anz. Flaschen, wie viel Flaschen passen in einen Karton?
 * --> Ergebnis: Anz. Kartons, Anz. Restflaschen
 * 2) Welche Informationen brauche ich von den Nutzern?
 * --> Anz. Flaschen, wie viele Flaschen passen in einen Karton
 */

// prompt: Popup, User kann einen Wert eingeben
let bottles = prompt('Wie viele Flaschen sind auf Lager?');

let boxQuantity = prompt('Wie viele Flaschen passen in einen Karton?');

let boxes = bottles / boxQuantity;
// boxes kann eine Kommazahl sein, z. B. 53.33333 --> 320 / 6
// boxes muss daher in eine Ganzzahl umgewandelt werden: --> 53
boxes = parseInt(boxes);

/**
 * Kommentar zu Datentypen für Zahlen:
 * In JS ist jede Zahl ein Wert vom Datentyp number
 * ... in anderen Programmiersprachen gibt es 
 * --> "int" für ganze Zahlen
 * --> "float" für Kommazahlen
 */

/**
 * Modulo: %
 * Gibt den ganzzahligen Rest einer Division zurück
 * 10 % 3 = 1
 */
let leftover = bottles % boxQuantity;
let missingBottles = boxQuantity - leftover;

// Das HTML-Element zur Ausgabe referenzieren
// Variable resultTag referenziert auf <div id="result">
let resultTag = document.getElementById('result');

/**
 * Jetzt (mit JavaScript) HTML-Code generieren, der dann
 * mit Hilfe von JavaScript im HTML-Container (mit der ID result)
 * eingefügt wird
 */
let output = '<h1>Flaschen-Verpackungsmaschine</h1>';

// Backticks: Shift + ` 
// Zum Einfügen einer Variable: ${variablenname}
output = output + `<p>Sie haben ${bottles} Flaschen auf
                Lager. Sie können damit ${boxes} 
                Kartons voll befüllen.</p>`;

// Verkürzte Schreibweise +=
// output +=  ist das gleiche wie 
// output = output + 
// füge zum bestehenden Inhalt der Variable output folgendes hinzu...
output += `<p>Dabei bleiben ${leftover} Flaschen über. 
            Produzieren Sie weitere ${missingBottles} 
            Flaschen um auch den letzten Karton zu befüllen.</p>`;


/**
 * Output in das HTML-Element schreiben
 * Zuweisung: = Operator
 * 
 * rechts vom = Operator: was gemacht werden soll - was in das 
 * HTML-Element gespeichert werden soll
 * 
 * link vom = Operator: auf was, das rechts vom = definierte, gespeichert werden soll
 */
resultTag.innerHTML = output;
console.log(output);