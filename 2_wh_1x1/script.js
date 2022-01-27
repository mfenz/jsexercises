/**
 * Ausgabe auf der Konsole:
 * 10 x 4 = 40
 * 9 x 4 = 36
 * ...
 * 1 x 4 = 4
 */

let a = 10;
let b = prompt('Bitte die Zahl für die Reihe eingeben:');
let ergebnis = a * b;

console.log(a + ' x ' + b + ' = ' + ergebnis);

a = a - 1;
ergebnis = a * b;
console.log(a + ' x ' + b + ' = ' + ergebnis);

a = a - 1;
ergebnis = a * b;
console.log(`${a} x ${b} = ${ergebnis}`);

a = a - 1;
ergebnis = a * b;
console.log(`${a} x ${b} = ${ergebnis}`);

a = a - 1;
ergebnis = a * b;
console.log(`${a} x ${b} = ${ergebnis}`);

a = a - 1;
ergebnis = a * b;
console.log(`${a} x ${b} = ${ergebnis}`);

a = a - 1;
ergebnis = a * b;
console.log(`${a} x ${b} = ${ergebnis}`);

a = a - 1;
ergebnis = a * b;
console.log(`${a} x ${b} = ${ergebnis}`);

a = a - 1;
ergebnis = a * b;
console.log(`${a} x ${b} = ${ergebnis}`);

a = a - 1;
ergebnis = a * b;
console.log(`${a} x ${b} = ${ergebnis}`);


// 1 x 4 = 4
for(let i = 1; i <= 10; i = i + 1)
{
    ergebnis = i * b;
    console.log(`${i} x ${b} = ${ergebnis}`);
}