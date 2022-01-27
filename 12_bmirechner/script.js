
function berechneBmi(event)
{
    event.preventDefault();

    // Gewicht und Größe aus dem Formular einlesen

    // Textfelder suchen... und auf eine Variable speichern
    let tfGewicht = document.querySelector('[name=kg]');
    let tfGroesse = document.getElementById('cm');

    // das eingegebene Gewicht aus dem Textfeld auslesen
    let kg = tfGewicht.value;
    // die eingegebene Größe in cm aus dem Textfeld auslesen
    let cm = tfGroesse.value;

    let m = cm / 100;

    // Math.pow(basis, exponent)
    let bmi = kg / Math.pow(m, 2);

    console.log(kg, cm, m, bmi);

    // Ausgabe: den berechneten Wert (bmi) in das Textfeld schreieben
    // .toFixed(2) reduziert die Anzahl der Nachkommastellen auf 2
    document.getElementById('bmi').value = bmi.toFixed(2);
}

// Auf Button-Click reagieren
document
    .querySelector('[name=btcalculate]')
    .addEventListener('click', berechneBmi);