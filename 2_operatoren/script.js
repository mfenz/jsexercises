
// Definition der Variablen
// Diese Daten werden im Computer gespeichert

// Text: Datentyp String
// String: Eine Aneinanderreihung von einzelnen Zeichen
let firstName = "Hansi"; // Datentyp string
let lastName = "Maier"; // Datentyp string

// Zahl: Datentyp "number"
let age = 30; // Datentyp number
let gift = "iPhone"; // Datentyp string
let salary = 1725.7; // Datentyp number

// Span mit der id "first_name" suchen, und den Text setzen
document.getElementById("first_name").innerHTML = firstName;

/**
 * Operatoren: + Operator
 * Die Funktionsweise des Plus-Operators ist von den Datentypen 
 * beider Variablen abhängig. 
 * 
 * Ein Operator benötigt immer zwei Werte, oder Variablen, ... 
 * ... ein Wert links vom Operator, ein Wert rechts vom Operator
 * 
 * Wie funktioniert der Plus-Operator mit zwei Strings?
 * --> Fügt den Text beider Strings nacheinander zusammen 
 * --> "Hansi" + "Maier" = "HansiMaier"
 * 
 * Operator: = Operator
 * --> Zuweisungsoperator
 * Zuerst wird der Code rechts vom = ausgeführt - das Ergebnis (Wert)
 * wird dann auf den Code links vom = zugewiesen
 * 
 */
document.getElementById("full_name").innerHTML = firstName + " " + lastName;

document.getElementById("gift").innerHTML = gift;
document.getElementById("age").innerHTML = age;
document.getElementById("salary").innerHTML = salary;

let doubleSalary = salary * 2;
document.getElementById("double_salary").innerHTML = doubleSalary;

/**
 * Arithmetischen Operatoren:
 * + Addition
 * * Multiplikation
 * - Subtraktion
 * / Division 10 / 3 = 3,33
 * 
 * % Modulo   10 % 3 = Ganzzahliger Rest der Division 10 / 3 --> 1
 * --> Modulo gibt den Rest der Divison zurück
 * 10 % 3 = 1
 * 9 % 3 = 0
 * 8 % 3 = 2
 * 
 * 10 % 2 = 0
 * 11 % 2 = 1
 * 12 % 2 = 0
 * 
 * Plus-Operator im Detail
 * 5 + 10 --> 15
 * "5" + "10" --> "510"
 * "5" + 10 --> "510" (weil String + irgendwas ergibt string)
 * 5 + "10" --> "510" 
 * 5 + 10 + 20 --> 35
 * 5 + 10 + "20" --> "1520"
 * 5 + 10 + "20" + 30 --> "152030"
 * 
 * Zuweisungsoperator
 * =
 */
