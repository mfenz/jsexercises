let res1 = stringRueckwaerts('Hello World');
document.body.innerHTML = `Rückwärts: ${res1}`;

function stringRueckwaerts(str)
{
    let ergebnis = '';

    // Beim letzten Zeichen starte, bis zum Ersten gehen
    for(let i = str.length -1; i >= 0; i--)
    {
        // Einzelnes Zeichen aus String holen
        let zeichen = str.charAt(i);
        // Zeichen für Zeichen den String zusammenbauen
        ergebnis += zeichen;
    }
    return ergebnis;
}