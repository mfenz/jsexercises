function onDraw(event)
{
    event.preventDefault();
    
    let height = document
        .querySelector('[name=height]')
        .value;

    let width = document
        .querySelector('[name=width]')
        .value;

    let result = '';

    // Counter: wie viele Zeichen wurden 
    // bereits ausgegeben
    let counter = 0;
    
    // Schleife geht über alle Zeilen
    for(let row = 0; row < height; row++)
    {
        // innerhalb der Zeile die Spalten
        // generieren
        for(let col = 0; col < width; col++)
        {
            // habe ich bisher eine gerade oder
            // ungerade Anzahl von Zeichen ausgegeben?
            // --> wenn gerade: Katzen
            // --> wenn ungerade: Küken
            if(counter % 2 == 0)
            {
                result += String.fromCodePoint('0x1f408');
            } else {
                result += String.fromCodePoint('0x1F423');
            }
            
            // counter erhöhen: Zeichen wurde eingefügt
            counter++;
        }
        // am Ende jeder Zeile einen 
        // Zeilenumbruch einfügen
        result += '<br>';
    }

    // Ergebnis in das HTML-Document schreiben
    document
        .getElementById('result')
        .innerHTML = result;
}

document
    .querySelector('[name=bt_draw]')
    .addEventListener('click', onDraw);