/**
 * Gibt den Text rückwärts auf der Konsole aus.
 * - Jedes Zeichen im String hat einen eindeutigen Index
 * - das erste Zeichen hat den Index 0
 * - auf einzelne Zeichen kann mit der .charAt(index) Methode
 *   zugegriffen werden. 
 */

let text = 'Hallo';

let result = '';
for(let i = text.length - 1; i >= 0; i--)
{
    let zeichen = text.charAt(i);

    // result += zeichen;
    // ... ist gleich wie ...
    // result = result + zeichen;
    result += zeichen;
}
console.log(result);