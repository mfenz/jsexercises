/**
 * Damit wir auf einen click auf OK reagieren können:
 * 1) Schreibe eine Function die beim Klick ausgeführt werden soll.
 * 2) Den Button suchen, auf einer Variable speichern (z. B. buttonOk) 
 * 3) Auf den gefundenen Button den Event-Listener hinzufügen
 */

// für den Button name="btok"

// 2) Den Button suchen, auf einer Variable speichern
let buttonOk = document.querySelector('[name=btok]');

// 3) Auf den gefundenen Button den Event-Listener hinzufügen
buttonOk.addEventListener('click', onButtonOkClicked);

// Inhalt dieser Function soll ausgeführt werden wenn btok geklickt wurde
function onButtonOkClicked(event)
{
    // damit das Formular nicht abgeschickt wird (damit die Seite nicht neu geladen wird)
    event.preventDefault();

    // Suche das Input-Textfeld, speichere es auf einer Variable (z. B. tfInput)
    let tfInput = document.querySelector('[name=eingabe]');

    // Hole den eingegebenen Text aus dem Input-Textfeld heraus, 
    // und speichere es in einer Variable (z. B. eingabeText)
    let eingabeText = tfInput.value;

    // Schreibe den Wert der Variable eingabeText auf das Ausgabe-Textfeld (name=ergebnis)
    // ... suche dafür das Ausgabe-Textfeld, und speichere es in einer Variable (z. B. tfErgebnis)
    let tfErgebnis = document.querySelector('[name=ergebnis]');

    // schreibe den Wert der Variable eingabeText in das Textfeld tfErgebnis
    tfErgebnis.value = eingabeText;
}



/**
 * Damit wir auf den Click für Button Clear reagieren können:
 * 1) Function definieren die dann ausgeführt werden soll
 * 2) Den Button suchen und in einer Variable speichern
 * 3) Dem Button einen Event-Listener (für click) hinzufügen
 */

// 1) Function definieren die beim Click auf Button Clear ausgeführt werden soll
function loescheEingabeUndAusgabe(event)
{
    event.preventDefault();

    // Hole mir die Textfelder und schreibe sie auf Variablen
    let tfEingabe = document.querySelector('[name=eingabe]');
    let tfErgebnis = document.querySelector('[name=ergebnis]');

    // setze einen leeren String als .value für beide Textfelder
    tfEingabe.value = '';
    tfErgebnis.value = '';
}

// 2) Den Button suchen und in einer Variable speichern
let buttonClear = document.querySelector('[name=btclear]');

// 3) Dem Button einen Event-Listener (für click) hinzufügen
buttonClear.addEventListener('click', loescheEingabeUndAusgabe);