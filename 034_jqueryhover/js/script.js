// jQuery Ready Function
$(function(){
    // Code hier ausführen sobald DOM bereit ist

    $('img').hover(
        // Maus rein
        function(event){
            // CSS-Klasse image entfernen
            // CSS-Klasse image-large hinzufügen
            // $(this) <-- Element wo die Maus drüber fährt
            $(this).removeClass('image');
            $(this).addClass('image-large');
        },
        // Maus raus
        function(event){
            // CSS-Klasse image-large entfernen
            // CSS-Klasse image hinzufügen
            $(this).removeClass('image-large');
            $(this).addClass('image');
        }
    );
});