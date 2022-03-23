x = [1, 4, 9, 5, 2];

/**
 * - Speichere die erste Zahl in eine Variable tmp
 * - Die erste Stelle mit dem Wert der letzten Stelle ersetzen
 * - Ersetze die letzte Stelle mit dem Wert der Variable tmp
 */

console.log("Vor dem Ersetzen:", x);

// speichere die erste Zahl in einer Variable
let tmp = x[0];

// Die erste Stelle mit dem Wert der letzten Stelle ersetzen
x[0] = x[x.length - 1];

// Ersetze die letzte Stelle mit dem Wert der Variable tmp
x[x.length-1] = tmp;

console.log("Nach dem Ersetzen:", x);