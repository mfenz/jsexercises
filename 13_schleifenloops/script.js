/**
 * Das kleine Einmaleins mit einer Schleife
 */

/**
 * 3 wichtigsten Schleifen:
 * for, while, do-while
 * for: wenn ich genau weiß wie oft ich etwas wiederholen möchte
 * 
 * for(INITIALISIERUNG; SCHLEIFENBEDINGUNG; VERÄNDERUNG)
 * {
 *    SCHLEIFENKÖRPER
 * }
 */
console.log('Die Zahlen von 10 bis 20:')
for(let i = 10; i <= 20; i++)
{
    console.log(`Die Variable i ist nun ${i}`);
}


/**
 * Schleife in Dreierschritten
 * Schreiben Sie ein Script das die Zahlen von 27 bis 18255 in 3er-Schritten ausgibt. 
 */
for(let i = 27; i <= 18255; i += 3)
{
    console.log(i);
}


console.log('Das kleine 1x1 mit Schleifen:');
let b = 4;
for(let a = 1; a <= 10; a = a + 1)
{
    let ergebnis = a * b;
    console.log(`${a} x ${b} = ${ergebnis}`);
}

// /**
//  * Das kleine 1x1 ohne Schleife:
//  */
// let a = 1;
// let b = 4;
// let ergebnis = a * b;
// console.log(`${a} x ${b} = ${ergebnis}`);

// a = a + 1;
// ergebnis = a * b;
// console.log(`${a} x ${b} = ${ergebnis}`);

// a = a + 1;
// ergebnis = a * b;
// console.log(`${a} x ${b} = ${ergebnis}`);

// a = a + 1;
// ergebnis = a * b;
// console.log(`${a} x ${b} = ${ergebnis}`);

// a = a + 1;
// ergebnis = a * b;
// console.log(`${a} x ${b} = ${ergebnis}`);

// a = a + 1;
// ergebnis = a * b;
// console.log(`${a} x ${b} = ${ergebnis}`);

// a = a + 1;
// ergebnis = a * b;
// console.log(`${a} x ${b} = ${ergebnis}`);

// a = a + 1;
// ergebnis = a * b;
// console.log(`${a} x ${b} = ${ergebnis}`);

// a = a + 1;
// ergebnis = a * b;
// console.log(`${a} x ${b} = ${ergebnis}`);

// a = a + 1;
// ergebnis = a * b;
// console.log(`${a} x ${b} = ${ergebnis}`);