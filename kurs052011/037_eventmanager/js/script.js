// jQuery Ready Function
$(function () {
    // Code hier ausführen sobald DOM bereit ist

    // mit AJAX die Events laden
    $.ajax({
        url: 'events.json', // von wo
        type: 'GET', // request type
        beforeSend: function () {
            // bevor etwas geladen wird
        },
        success: function (data) {
            // Daten erfolgreich geladen
            console.log(data);
            // Events Array übergeben
            eventsGeladen(data.events);
        },
        complete: function () {
            // fertig geladen (egal ob Fehler oder nicht)
        }
    });

    // für Textfeld die jQuery UI .autocomplete()
    // Funktionalität anwenden
    // Was fehlt: Werte hinterlegen die vorgeschlagen werden
    $('#name-autocomplete').autocomplete({
        // mit source: können direkt Vorschäge angegeben werden
        source: ["aaa", "bbb", "ccc"]
    });

    // wenn sich der Inhalt vom Textfeld ändert
    $('#name-autocomplete').keyup(function (event) {
        // Events filtern und ausgeben
        filterEvents();
    });
    // change: ähnlich wie Keyup (nur ganz zum Schluss)
    $('#name-autocomplete').change(function (event) {
        // Events filtern und ausgeben
        filterEvents();
    });

    $('#fee-slider').slider({
        range: true, // zwischen zwei Werten (Bereich definieren)
        min: 0, // kleinster Wert
        max: 2000, // größte Wert
        values: [0, 2000], // Anfangswerte setzen
        slide: function (event, ui) { // Event, wenn Slider betätigt wird
            //console.log(ui.values);
            filterEvents();
        },
        change: function(event, ui){
            filterEvents();
        }
    });

    $('#event-datepicker').datepicker({
        dateFormat: 'dd.mm.yy'
    });

    $('#tabs').tabs();

    $('#info-anzeigen').button();
    $('#info-anzeigen').click(function(event){
        // Toggle wechselt zwischen zwei Zuständen
        // fold, bounce, slide, shake
        $('#tabs').toggle('bounce', 1000);
    })
});

// Hier werden alle Events gespeichert
let events = [];

// wird mit Daten von AJAX aufgerufen
function eventsGeladen(eventList) {
    // Geladene Events in Array kopieren
    for (let i = 0; i < eventList.length; i++) {
        events.push(eventList[i]);
    }
    // Geladenen Events anzeigen
    showEvents(events);
    setAutocompleteWerte();
}

// Setzt die Vorschläge für Autocomplete Textfeld
function setAutocompleteWerte() {
    let kursnamen = [];
    for (let i = 0; i < events.length; i++) {
        // Event aus Array holen
        let e = events[i];
        // Event-Name in kursnamen-Array einfügen
        kursnamen.push(e.description);
    }
    // Werte setzen die Autocomplete vorschlagen kann
    // setzt source-Attribut von Autocomplete mit den Kursnamen
    $('#name-autocomplete').autocomplete('option', 'source', kursnamen);
}

// Zeigt alle übergebenen Events in der Tabelle an
// events: Array von events
function showEvents(events) {
    // tbody suchen, in <table id="courses">
    let tbody = $('table#courses tbody');
    // Alle bisherigen Zeilen rauslöschen
    tbody.empty();
    // Elemente nacheinander in Tabelle einfügen
    for (let i = 0; i < events.length; i++) {
        // Jedes Event-Objekt einzeln aus Array holen
        let e = events[i];
        // HTML Text generieren
        // Die Namen der Attribute kommen aus der JSON Datei
        let trHtml = `<tr>
                        <td>${e.description}</td>
                        <td>${e.location}</td>
                        <td>${e.date}</td>
                        <td>${e.capacity}</td>
                        <td>${e.fee}</td>
                    </tr>`;
        // jQuery HTML Knoten erstellen, mit .hide() vorerst verstecken
        let tr = $(trHtml).hide();
        // <tr> in <tbody> einfügen
        tbody.append(tr);
        // <tr> sichtbar setzen mit Effekten
        tr.fadeIn();
    }
}

/*
Liest Filter ein, filtert Event liste,
Ausgabe aller gefilterten Events
*/
function filterEvents() {
    // Events Array kopieren, in resultat Array speichern
    let resultat = [...events];
    // Nach Kursname filtern
    let kursname = $('#name-autocomplete').val();
    // Nur Filter anwenden wenn Kursname eingegeben wurde
    if (kursname.length > 0) {
        // von hinten nach vorne iterieren (wegen Index-Problem beim löschen)
        for (let i = resultat.length - 1; i >= 0; i--) {
            // Array-Elemente löschen die nicht dem Suchkriterium entsprechen
            if (resultat[i].description != kursname) {
                // Element löschen
                resultat.splice(i, 1);
            }
        }
    }

    // Nach Kursbeitrag filtern
    let feeValues = $('#fee-slider').slider('option', 'values');
    let min = feeValues[0];
    let max = feeValues[1];
    for(let i = resultat.length - 1; i >= 0; i--){
        // Prüfen ob Kursbeitrag unter Minimum, oder über Maximum ist
        if(resultat[i].fee == 2000){
            console.log(min, max);
        }
        if(resultat[i].fee < min || resultat[i].fee > max){
            // Element löschen
            
            resultat.splice(i, 1);
        }
    }

    showEvents(resultat);
}