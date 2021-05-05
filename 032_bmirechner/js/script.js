// jQuery Ready Function
$(function(){
    // Code hier ausführen sobald DOM bereit ist

    // Auf Button-Click reagieren
    $('button').click(function(event){
        // <input type="text" id="kg">
        // .val() <-- Wert von Textfeld bekommen
        let kg = $('#kg').val();

        // <input type="text" id="groessecm">
        let cm = $('#groessecm').val();

        let m = cm / 100.0;
        // Math.pow(basis, exponent)
        let bmi = kg / Math.pow(m, 2);

        // <input type="text" id="ergebnis">
        // .val(wert) <-- setzt den angegebenen Wert
        $('#ergebnis').val(bmi);
    });
});