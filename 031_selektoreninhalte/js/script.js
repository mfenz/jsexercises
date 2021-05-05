// jQuery Ready Function
$(function(){
    // Code hier ausführen sobald DOM bereit ist

    // <h1>
    $('h1').text('My Account');
    // data-first-name
    $('[data-first-name]').text('Alex');
    $('[data-last-name]').text('Muster');
    // id="address"
    $('#address').text('Hauptstraße 7');
    // id="email"
    $('#email').text('alex@example.com');
    $('#email').css('color', 'red');
    // unterstreichen
    $('#email').css('text-decoration', 'underline');
});