/**
 * Wenn der Button gedrückt wird:
 * 1) den eingegebenen Wert heranziehen
 * 2) Vergleiche eingegebene Ziffer ... und ermittle das Ergebnis
 * 3) Ausgabe: Schreibe Ergebnis in Ausgabefeld
 */

// für den Button ein click-Event hinzufügen
document.querySelector('[name=btsubmit]').addEventListener('click', onButtonClicked);

function onButtonClicked(event) {
    // damit die Seite beim Klick auf den Button nicht neu geladen wird
    event.preventDefault();

    // 1) den eingegebenen Wert heranziehen
    let grade = document.getElementById('grade').value;

    if(isNaN(grade) == true)
    {
        alert('Bitte nur Zahlen eingeben!');
        // return beendet die momentane Ausführung der function
        return;
    }

    console.log('Variable grade ist ein ', typeof(grade)); // string
    // Konvertiere grade (string) in eine number
    grade = Number(grade);
    console.log('Variable grade ist ein ', typeof(grade)); // number

    // 2) Vergleiche eingegebene Ziffer ... und ermittle das Ergebnis
    let result = '';
    switch(grade)
    {
        // wenn auf grade der Wert 1 steht
        // beende das case mit einem Break --> geht aus dem switch-case heraus
        case 1: result = 'Sehr gut'; break;
        case 2: result = 'Gut'; break;
        case 3: result = 'Befriedigend'; break;
        case 4: result = 'Genügend'; break;
        case 5: result = 'Nicht genügend'; break;
        default: result = `${grade} ist keine Note!`; break;
    }

    // 3) Ausgabe: Schreibe das Ergebnis ins Ausgabefeld
    // der Wert rechts vom Zuweisungsoperator = wird der Variable links vom = zugewiesen
    document.getElementById('result').value = result;
}