// Funktion soll ausgeführt werden wenn der Button gedrückt wird
function onCalculate(event)
{
    event.preventDefault();
    let betrag = document.getElementById('betrag').value;
    let zinssatz = document.querySelector('[name=zinssatz]').value;
    let laufzeit = document.getElementById('laufzeit').value;

    // wandle String-Eingabe in number um
    betrag = parseFloat(betrag);
    zinssatz = parseFloat(zinssatz);
    laufzeit = parseFloat(laufzeit);

    let i = zinssatz / 100;

    /**
     * Möglichkeit 1:
     * Kn = K0*(1+i)^n 
     * 
     * Möglichkeit 2:
     * - aktuellesKapital
     *   + Zinsen für das Jahr dazu
     */

    let result = '';

    // Möglichkeit 1
    /*for(let jahr = 1; jahr <= laufzeit; jahr++)
    {
        let kn = betrag * Math.pow(1+i, jahr);
        result += `<p>Wert nach dem ${jahr}. Jahr: ${kn.toFixed(2)}</p>`;
    }*/

    // Möglichkeit 2
    let kJahresbeginn = betrag;
    for(let jahr = 1; jahr <= laufzeit; jahr++)
    {
        let zinsen = kJahresbeginn * i;
        let kJahresende = kJahresbeginn + zinsen;
        result += `<p>Jahr ${jahr}: 
            Anfangskapital: ${kJahresbeginn.toFixed(2)}, 
            Zinsen: ${zinsen.toFixed(2)}, 
            Endkapital: ${kJahresende.toFixed(2)}.</p>`;

        kJahresbeginn = kJahresende;
    }

    // Ausgabe von "result" im HTML-Text
    document.getElementById('ergebnis').innerHTML = result;
}


// Button-Click mit der Funktion verknüpfen
document
    .querySelector('[name=bt_calculate]')
    .addEventListener('click', onCalculate);