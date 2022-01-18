// jQuery Ready Function
$(function(){
    // Code hier ausführen sobald DOM bereit ist

    // <input type="text" id="kmh">
    // mit keyup-Event auf Tastatureingaben reagieren
    $('#kmh').keyup(function(event){
        // mit $(this) auf das Textfeld referenzieren
        let eingabe = $(this).val();
        
        // <span data-ms>0</span> <-- Ausgabe
        // .val() <-- Text eines Textfeldes setzen
        // .text() <-- für alle anderen HTML Elemente
        // .toFixed(anzNachkommastellen) <-- Formatierte Zahl
        $('[data-ms]').text((eingabe / 3.6).toFixed(3));
    });
});