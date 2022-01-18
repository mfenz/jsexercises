let zahlen = [3, 7, 1, 3, 90, 5, -5];

// Funktionsaufruf mit einem Parameter
// Ergebnis auf Variable kleinsteZahl speichern
let kleinsteZahl = minimumFinden(zahlen);
// Ergebnis ausgeben lassen
console.log(`Kleinste Zahl: ${kleinsteZahl}`);

function minimumFinden(zahlen)
{
    // Am Anfang ist die kleinste Zahl die erste Zahl
    let kleinste = zahlen[0];
    // jedes Element im Array prüfen
    for(let i = 0; i < zahlen.length; i++)
    {
        if(zahlen[i] < kleinste)
        {
            kleinste = zahlen[i];
        }
    }
    // nach der Schleife weiß man die kleinste Zahl

    // return <-- beendet die Funktion
    // return kleinste; <-- Gibt Wert von kleinste zurück
    return kleinste;
}