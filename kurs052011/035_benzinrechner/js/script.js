// jQuery Ready Function
$(function(){
    // Code hier ausführen sobald DOM bereit ist

    // <form> auswählen, auf abschicken reagieren
    // submit wird ausgelöst wenn Formular abgeschickt wird
    $('form').submit(function(event){
        // damit das Formular nicht abgeschickt wird
        event.preventDefault();

        // Liter von Textfeld mit .val() einlesen
        let liter = $('[name=liter]').val(); // String einlesen
        let km = $('[name=km]').val();
        let betrag = $('[name=betrag]').val();

        liter = parseFloat(liter); // string in number umwandeln
        km = parseFloat(km);
        betrag = parseFloat(betrag);

        // Funktion addTankbeleg aufrufen
        addTankbeleg(liter, km, betrag);
    });


    // $(staticAncestors).on(eventName, dynamicChild, function() {});
    // mit .on() auf dynamisch eingefügte Elemente reagieren
    $('table tbody').on('click', 'button[data-remove-beleg-id]', function(event){
        // Wert des data-Attributs auslesen
        let id = $(this).data('remove-beleg-id');
        console.log(`Es soll id=${id} gelöscht werden.`);
        // Funktion aufrufen, id ist ein Argument
        removeTankbeleg(id);
    });
});

// ID für Tankbelege (speichert bisher größte ID)
let maxId = 0;
// Array in dem alle Tankbelege gespeichert werden
let belege = [];

class Tankbeleg
{
    // constructor <-- zum Initialisieren des Objekts mit Werten
    // jeder Tankbeleg besteht aus liter, km, betrag
    constructor(id, liter, km, betrag)
    {
        // dem erstellten Objekt einen Wert zuweisen
        // this <-- Auf Objekt zugreifen
        this.id = id;
        this.liter = liter;
        this.km = km;
        this.betrag = betrag;
    }

    // Methode (Funktion)
    verbrauchLiterPro100km(){
        return (this.liter / this.km) * 100;
    }

    // Methode (Funktion)
    kostenProKm(){
        return this.betrag / this.km;
    }
}

// Funktion erstellt ein Objekt der Klasse Tankbeleg
// fügt dieses in Array ein, und stellt es in Tabelle dar
function addTankbeleg(liter, km, betrag){
    // new <-- Schlüsselwort um Objekte zu erzeugen
    // new Klassenname() <-- erzeugt ein Objekt der Klasse
    maxId++; // ID erhöhen für nächsten Tankbeleg
    let tankbeleg = new Tankbeleg(maxId, liter, km, betrag);

    // Tankbeleg in Array geben
    belege.push(tankbeleg);

    // Funktion zur Ausgabe in Tabelle aufrufen
    addTankbelegToTable(tankbeleg);
    // Statistik aktualisieren
    updateStatistik();
}

function addTankbelegToTable(tankbeleg) {
    let tr = `<tr data-beleg-id="${tankbeleg.id}">
                <td>${tankbeleg.liter}</td>
                <td>${tankbeleg.km}</td>
                <td>${tankbeleg.betrag}</td>
                <td>${tankbeleg.verbrauchLiterPro100km().toFixed(2)}</td>
                <td>${tankbeleg.kostenProKm().toFixed(2)}</td>
                <td>
                    <button data-remove-beleg-id="${tankbeleg.id}">
                        Eintrag löschen
                    </button>
                </td>
            </tr>`;
    $('table tbody').append(tr);
}

function updateStatistik(){
    // Anzahl der Tankbelege <-- Anzahl der Array-Elemente
    let anzahlTankbelege = belege.length;

    // gesamt km und gesamt liter
    let kmSumme = 0;
    let literSumme = 0;
    // Mit Hilfe von Schleife alle Tankinhalte des Arrays anschauen
    for(let i = 0; i < belege.length; i++){
        // Tankbeleg aus Array herausholen
        let beleg = belege[i];
        // Betrag dazurechnen
        kmSumme += beleg.km;
        literSumme += beleg.liter;
    }

    // durchschnittsverbrauch
    let durchschnittsverbrauch = (literSumme / kmSumme) * 100;

    // Werte in HTML setzen
    $('[data-stat-tankbelege]').text(anzahlTankbelege);
    $('[data-stat-km]').text(kmSumme);
    $('[data-stat-l]').text(literSumme);
    $('[data-stat-verbrauch]').text(durchschnittsverbrauch);
}

/* Funktion removeTankbeleg, Übergabeparameter ist die
   ID des zu löschenden Tankbelegs
*/
function removeTankbeleg(id){
    // Gesuchtes Element mit id aus dem Array löschen
    for(let i = 0; i < belege.length; i++){
        // Beleg aus Array holen
        let beleg = belege[i];
        // Prüfen ob der Beleg die gesuchte ID hat
        if(beleg.id == id){
            // Beleg gefunden, aus Array löschen
            // Löschen mit .splice(index, anzLöschendeElemente)
            belege.splice(i, 1);
            // Schleife beenden
            break;
        }
    }

    // Statistik aktualisieren
    updateStatistik();

    // <tr data-beleg-id="${tankbeleg.id}"> aus Tabelle löschen
    // .remove() löscht alle gefundenen Knoten (HTML-Elemente) aus DOM
    $(`tr[data-beleg-id=${id}]`).remove();

}