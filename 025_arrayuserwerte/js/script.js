// script.js

let anzahlWerte = prompt("Wie viele Werte sollen eingegeben werden?", 3);

let werte = [];

for(let i = 0; i < anzahlWerte; i++){
    // User Eingabe
    let eingabe = prompt("Bitte um Eingabe: ", `i=${i}`);

    // User Eingabe in Array speichern
    werte.push(eingabe);
}

// Browser Ausgabe
for(let i = 0; i < werte.length; i++){
    let p = document.createElement('p');
    p.innerText = werte[i];
    document.body.appendChild(p);
}