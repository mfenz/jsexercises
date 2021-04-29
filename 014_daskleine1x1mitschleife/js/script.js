let zahl2 = prompt('Zahl eingeben: ', 1);

// for(init, bedingung, veränderung){Körper}
for(let zahl1 = 1; zahl1 <= 10; zahl1++)
{
    let ergebnis = zahl1 * zahl2;

    // HTML Element erstellen <p>
    let zeile = document.createElement('p');
    // Text für HTML Element setzen
    zeile.textContent = `${zahl1} x ${zahl2} = ${ergebnis}`;

    // <p> in DOM-Baum einfügen
    // document.body greift auf <body> zu
    // .appendChild(element) fügt das neu erstellte Element dort ein
    document.body.appendChild(zeile);
}