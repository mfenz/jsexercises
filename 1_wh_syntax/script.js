/**
 * Variablen
 * Eine Variable ist wie eine Box (Container) mit einem eigenen Namen
 *   der genau einen Wert speichern (beinhalten) kann. 
 * 
 * let variablenname = wert;
 * 
 * "let" ist ein Schlüsselwort - weist den Computer an eine 
 *   neue Variable im Speichern anzulegen.
 * 
 * z. B. 
 * let alter = 15;
 */

let alter = 15;

console.log(alter); // 15

alter = 30;

console.log(alter);

/**
 * Texte müssen immer in einfache oder doppelte Anführungszeichen gesetzt werden.
 * 'Marc' oder "Marc"
 */
let name = 'Marc';

/**
 * Bool
 */
let verheiratet = false;

// camelCase
let firstName = 'Hansi';
// snake_case
let first_name = 'Hansi';

/**
 * Datentypen
 * Zahlen: Datentyp number
 * Texte: Datentyp string
 * Wahrheitswerte: Datentyp boolean 
 */
console.log('Die Variable alter hat den Datentyp:', typeof (alter));
console.log('Die variable name hat den Datentyp:', typeof (name));
console.log('Die Variable verheiratet hat den Datentyp:', typeof (verheiratet));

/**
 * Operatoren
 * + - * / = == < > != 
 * Operatoren verbinden zwei Werte miteinander
 * 
 * = Zuweisungsoperator (was rechts vom = steht wird auf die Variable links vom = zugeiesen)
 */
alter = 20;
// . Punktoperator -> in die Konsole hineingehen, und für die Konsole die Funktion log() aufrufen
console.log('Ich bin ' + alter + ' Jahre alt.');

// nehme den aktuellen Wert von alter her, rechne 1 dazu, und speichere das Ergebnis auf alter
alter = alter + 1;
console.log('Nach meinem Geburtstag bin ich ' + alter + ' Jahre alt.');

// alter verdoppeln
alter = alter * 2;
// Backticks
console.log(`Wenn ich doppelt so alt bin, bin ich ${alter} Jahre alt.`);


/**
 * Divisions-Operator: /
 * Modulo-Operator: %
 * 
 * Modulo berechnet den ganzzahligen Rest einer Division
 * 10 % 3 --> geht 3x, 1 Rest
 */
console.log('10 / 3', 10 / 3);
console.log('10 % 3', 10 % 3);
console.log('11 % 3', 11 % 3);
console.log('12 % 3', 12 % 3);

// ist das Alter eine gerade Zahl?
// if: wenn das Alter modulo 2 genau 0 ist, dann ... 
alter = alter + 1;

// Innerhalb der runden Klammern beim if steht eine Bedingung
// --> Die Bedingung muss erfüllt (true) sein damit der Code in den nachfolgenden {} ausgeführt wird
if (alter % 2 == 0) {
    console.log(`${alter} ist eine gerade Zahl!`);
}
else {
    console.log(`${alter} ist eine ungerade Zahl!`);
}



// so bitte nicht!
console.log('1 x 3 = 3');
console.log('3 x 3 = 6');