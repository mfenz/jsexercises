function onZeichnen(event)
{
    // damit die Seite beim Button-Klick nicht neu geladen wird
    event.preventDefault();

    //Auf das Eingabe-Textfeld zugreifen
    let tfZeilen = document.getElementById('zeilen');
    //Was hat die Person eingetippt?
    let zeilen = tfZeilen.value;

    /**
    Anzahl der Zeilen: 4
    *
    **
    ***
    ****
     */
    let ergebnis = 'Anzahl der Zeilen: ' + zeilen + '<br>';

    // Schleife steuert die Anzahl der Zeilen
    for(let zeile = 1; zeile <= zeilen; zeile++)
    {
        // Wie viele Sterne haben wir in der aktuellen Zeile
        // bereits ausgegeben? 
        for(let stern = 1; stern <= zeile; stern++)
        {
            ergebnis = ergebnis + String.fromCodePoint('0x1f408');
        }
        ergebnis = ergebnis + '<br>';
    }
    
    // paragraph (Ausgabe) finden und auf Variable speichern
    let pErgebnis = document.getElementById('ergebnis');
    pErgebnis.innerHTML = ergebnis;
}

// Den Button finden
let btZeichnen = document.querySelector('[name=btzeichnen]');
// Definieren was beim Klick auf den Button passieren soll
// --> Event Listener
btZeichnen.addEventListener('click', onZeichnen);