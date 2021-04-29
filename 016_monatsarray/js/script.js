let monate = ["Jänner", "Februar", "März", "April", 
    "Mai", "Juni", "Juli", "August", "September", 
    "Oktober", "November", "Dezember"];

// hier speichern wir den String für das Ergebnis
let ergebnis = '';
for(let i = 0; i < monate.length; i++)
{
    // Ein Element aus dem Array herausholen
    let monat = monate[i];
    // Monats-Name zum Ergebnis hinzufügen
    ergebnis = ergebnis + monat;
    // wenn ich NICHT beim letzten Element bin
    // dann einen Beistrich einfügen
    if(i != monate.length - 1)
    {
        ergebnis = ergebnis + ", ";
    }

    // immer nach zwei Monaten einen Zeilenumbruch
    if(i % 2 == 1){
        ergebnis = ergebnis + '<br/>';
    }
}

// <p></p> direkt in Body setzen
document.body.innerHTML = `<p>${ergebnis}</p>`;