// Liste mit allen Gästen
let guests = [];

function onAddGuest(event)
{
    event.preventDefault();
    
    // Text (Name) aus dem Textfeld einlesen
    let name = document.querySelector('[name=name]').value;

    // Wurde etwas eingegeben?
    // .trim() löscht alle Leerzeichen am Anfang und Ende eines Strings
    if(name.trim().length == 0)
    {
        alert('Name eingeben!');
        // beende die funktion mit return 
        return;
    }

    // Füge den Namen in die Liste ein
    guests.push(name);
    
    // Rufe die Funktion displayGuests() auf
    displayGuests();
}

function displayGuests()
{
    let html = '<ul>';
    // Iteration über die Liste "guests"
    for(let i = 0; i < guests.length; i++)
    {
        let name = guests[i];
        html += '<li>' + name + '</li>';
    }
    html += '</ul>';

    // schreibe den Inhalt der Variable "html" in das div mit id="guests"
    document.getElementById('guests').innerHTML = html;


    // Aktualisiere die Anzahl der Gäste
    document
        .getElementById('guest_count')
        .innerText = guests.length;
}


// Verknüpfe Button mit Function
document.querySelector('[name=bt_add_guest]').addEventListener('click', onAddGuest);