function onCurrentTime(event)
{
    event.preventDefault();
    
    // Aktuelle Uhrzeit herausfinden
    let now = new Date();
    
    let result = now.getHours() + ':' + now.getMinutes();

    // schreibe das Ergebnis in das HTML-Doc
    document
        .getElementById('time')
        .innerText = result;
}


function onAutoTime(event)
{
    event.preventDefault();
    // starte die automatische aktualisierung
    //window.setInterval(showCurrentDateAndTime, 100);
}

function showCurrentDateAndTime()
{
    let now = new Date();

    let result = now.getDate() 
        + '.' 
        + (now.getMonth() + 1)
        + '.'
        + now.getFullYear() 
        + ' ' 
        + now.getHours() + ':' + now.getMinutes()
        + ':' + now.getSeconds();

    // Zeige das Ergebnis im HTML-Doc
    document
        .getElementById('auto_time')
        .innerText = result;
}

// Verknüpfe HTML-Button mit JS Function
document
    .querySelector('[name=bt_current_time]')
    .addEventListener('click', onCurrentTime);

document
    .querySelector('[name=bt_auto_time]')
    .addEventListener('click', onAutoTime);


window.setInterval(showCurrentDateAndTime, 100);