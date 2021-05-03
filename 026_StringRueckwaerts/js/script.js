// script.js

let str = "Hallo Welt";

// var 1

let result = "";
for(let i = str.length - 1; i >= 0; i--){
    result += str.charAt(i);
}
// Variante 1 Ausgabe
let p = document.createElement('p');
p.innerText = result;
document.body.appendChild(p);

// Var 2

let v2Str = str.split('');
let v2Result = v2Str.reverse().join('');

// Variante 2 Ausgabe
let v2p = document.createElement('p');
v2p.innerText = v2Result;
document.body.appendChild(v2p);