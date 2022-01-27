/**
 * Auf Änderungen im Textfeld reagieren --> change Event
 * 1) Function definieren die bei Änderungen im Textfeld ausgeführt werden soll
 * 2) Das Textfeld suchen und in einer Variable speichern
 * 3) Dem Textfeld einen Event Listener (change Event) hinzufügen, und function hinterlegen
 */

// 1) function definieren
function ersetzteWoerter(event)
{
    // was wurde bisher eingegeben?

    // hole aus tfEingabe mit .value den aktuell eingegebenen Text heraus
    let text = tfEingabe.value;

    // ersetze die Wörter dog, cat, hamburger durch emojis
    // cat: 0x1f408
    // dog: 0x1f415
    // hamburger: 0x1f354
    text = text.replaceAll('cat', String.fromCodePoint('0x1f408'));
    text = text.replaceAll('dog', String.fromCodePoint('0x1f415'));
    text = text.replaceAll('hamburger', String.fromCodePoint('0x1f354'));

    // Text auf die Konsole schreiben
    console.log(text);

    // Text im HTML (div id="ausgabe") zeigen
    // 1) Div suchen und auf einer Variable speichern
    let divAusgabe = document.getElementById('ausgabe');
    // 2) dem div mit .innerHTML den neuen Text setzen
    divAusgabe.innerHTML = text;
}

// 2) Das Textfeld suchen auf das reagiert werden soll, und in einer Variable speichern
// suche das Textfeld mit name="eingabe"
let tfEingabe = document.querySelector('[name=eingabe]');

// 3) Dem Textfeld einen EventListener (für ein change Event) hinzufügen
// führe die function ersetzeWoerter() aus wenn jemand im Textfeld tfEingabe etwas tippt
tfEingabe.addEventListener('keyup', ersetzteWoerter);