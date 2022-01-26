/**
 * Ich bin ein Kommentar über mehrere Zeilen
 * Kommentare werden beim Ausführen des Codes ignoriert
 */

// Ich bin ein Kommentar für genau eine Zeile

/**
 * Variablen sind Platzhalter bzw. Container für genau einen Wert
 * --> z. B. eine Zahl, ein Text, ... 
 * 
 * Eine Variable hat immer einen eigenen Namen - und der Name 
 * muss angegeben werden um auf den hinterlegten Wert
 * lesend oder schreibend zugreifen zu können. 
 * 
 * Namensregeln für Variablen:
 * - Keine Leerzeichen (Ein Name ist immer zusammen geschrieben)
 * - Falls der Name aus mehreren Wörtern besteht, werden diese
 *   mit Unterstrichen (snake_case) oder camelCase verbunden. 
 * - Das erste Zeichen darf nur ein Underscore oder ein Buchstabe sein
 *   --> OK wäre: _zahl1 oder zahl1 oder zahl
 *   --> Nicht OK wäre: 1zahl 
 * - Variablennamen sollten in den meisten Fällen mit einem Kleinbuchstaben
 *   beginnen
 * - Variablennamen sinnvoll vergeben!
 *   So lange wie nötig, aber so kurz möglich
 */

/**
 * Variablen werden mit dem "let" Schlüsselwort neu angelegt
 * let a = 7;
 * "lasse die Variable a 7 sein"
 */

/**
 * Zahl + Zahl ergibt Zahl (number)
 * Zahl + Text ergibt Text (string)
 * Text + Zahl ergibt Text (string)
 * Text + Text ergibt Text (string)
 */

/**
 * 14 + "Text" + 9 + 5;
 * "14Text" + 9 + 5;
 * "14Text9" + 5;
 * "14Text95"
 */
 let aa = 9 + 5 + "Text" + 9 + 5;
console.log('aa', aa);


// 'AC105D'
let bb = 'A' + 'C' + 10 + 5 + 'D';
console.log('bb', bb);

/**
 * Boolean: entwender true oder false
 * 6 > 5 = true
 */
let b = 6 > 5;
console.log('b', b);

/**
 * true + "X" + 1 + 3*3;
 * true + "X" + 1 + 9; // Punkt vor Strich!
 * "trueX" + 1 + 9;
 * "trueX1" + 9;
 * "trueX19";
 */
let cc = b  + "X" + 1 + 3*3;
console.log('cc', cc);


/**
 * 10 + 10 * 3 + "Hello World" + "." + 1*2
 * 10 + 30 + "Hello World" + "." + 2
 * "40Hello World.2"
 */
let dd = 10 + 10 * 3 + "Hello World" + "." + 1*2;
console.log('dd', dd);