// jQuery Ready Function
$(function(){
    // Code hier ausführen sobald DOM bereit ist

    // $('a') <-- Selektor, wählt alle <a> aus
    $('a').click(function(event){
        // diese Funktion wird ausgeführt sobald
        // click-Event ausgelöst wird

        // Verhindert was eigentlich geschehen sollte
        event.preventDefault();

        // mit $(this) auf das geklickte Element zugreifen
        // .attr() liest das angegebene Attribut aus
        let link = $(this).attr('href');
        alert(`Wollten Sie zu ${link}?`);

        // für das geklickte Element einen Text setzen
        $(this).text("Click!");
    });

    // Reagiert auf <button> click
    $('button').click(function(event){
        // Für alle <p> den Text "Ich wurde mit jQuery verändert" setzen
        $('p').text('Ich wurde mit jQuery verändert');
        // jedes zweite <p> soll rot gefärbt werden
        $('p:odd').css('color', 'red');
        // alle geraden <p>: fette Schrift
        $('p:even').css('font-weight', 'bold');

        // beim Button-Klick soll div
        // mit id="main-menu" unsichtbar werden
        //$('#main-menu').hide();
        $('#main-menu').fadeOut();

        // Alle Elemente mit der Klasse active
        $('.active').css('color', 'red');
    });


    // <input type="submit" name="btvorname">
    $('[name=btvorname]').click(function(event){
        // Textfeld auslesen
        // <input type="text" id="vname" name="vorname">
        let vorname = $('#vname').val();
        alert(`Herzlich willkommen ${vorname}`);
    });

});