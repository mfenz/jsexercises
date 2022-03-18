/**
 * Eine Liste ist eine Datenstruktur
 * --> Beispiele für Datenstrukturen: Listen, Arrays, Sets, ... 
 * 
 * - In einer Liste können beliebig viele Elemente gespeichert werden
 * - Eine Liste erlaubt doppelte Einträge des gleichen Werts
 * - Jedes Element in einer Liste hat einen eindeutigen Index
 * - Der Index beginnt mit 0 
 * - Der Zugriff auf ein Element erfolgt über die Angabe des 
 *   Index in eckigen Klammern, z. B. x[5]
 */

// Erzeuge eine Liste mit vier Zahlen
let numbers = [5, 8, 3, 5];

let f1 = 'Mangos';
let fruits = ['Apples', 'Oranges', 'Bananas', f1, 'Grapes'];

// Ausgabe eines Elements:
console.log('Ausgabe des Elements mit Index 2:', fruits[2]);
console.log('Ausgabe des Elements mit Index 0:', fruits[0]);
console.log('Ausgabe des Elements mit Index 3:', fruits[3]);

// Length: Wie viele Elemente sind in der Liste enthalten?
console.log('Verwenden von length:', fruits.length);

// Push: Fügt ein Element an das Ende der Liste hinzu
fruits.push('Berries');
console.log(`Nach dem Einfügen von Berries sind ${fruits.length} Elemente enthalten`);

// Sind Berries tatsächlich an der letzten Stelle der Liste?
console.log(`Das Element am Ende der Liste ist ${fruits[fruits.length - 1]}`);

// indexOf(): Welchen Index hat ein bestimmtes Element?
// sucht nach Oranges in der Liste. Gibt Index des gesuchten Elements zurück
let indexOfOranges = fruits.indexOf('Oranges');
console.log('Index von Oranges:', indexOfOranges);

// .indexOf() gibt -1 zurück wenn es das gesuchte Element nicht gibt
let searchFruit = 'kiwi';
console.log(`Das Element ${searchFruit} befindet sich am 
    Index ${fruits.indexOf(searchFruit)}`);

// Löschen eines Elements aus der Liste:
// 1) pop() löscht das Element am Ende der Liste
// 2) shift() löscht das Element am Anfang der Liste
// 3) splice(index, 1) löscht das Element am angegebenen Index

// Lösche "Mangos" aus der Liste (Index 3)
// --> ab dem Index 3, lösche 1 Element
fruits.splice(3, 1);

console.log('Ausgabe aller Elemente, Zeile für Zeile:');
// Iteration über die Liste fruits
for(let i = 0; i < fruits.length; i++)
{
    console.log(`Element mit Index ${i} ist ${fruits[i]}`);
}

// Ausgabe der Liste ohne einer bestimmten Formatierung:
console.log(fruits);

// .sort() sortiert die Liste
fruits.sort();
console.log('Sortierte Listen:', fruits);

// .reverse() dreht den Inhalt der Liste um
fruits.reverse();
console.log('Liste nach .reverse()', fruits);

// Replace: ersetze Element an einem Index mit einem anderen Element
fruits[0] = 'Kiwis';
console.log('Liste nach Ersetzen von Oranges durch Kiwis:', fruits);