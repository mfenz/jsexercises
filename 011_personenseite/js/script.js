let vorname = document.getElementById('vorname');
let nachname = document.getElementById('nachname');
let kontostandFeld = document.querySelector('[data-kontostand]');

vorname.textContent = "Heinz";
nachname.textContent = "Gruber";

// wenn der Kontostand negativ ist, soll die Zahl
// rot dargestellt werden; falls positiv --> grün
let kontostand = prompt("Wie schaut's aus am Konto?", 9); //-9000000; 
if(kontostand <0){
    kontostandFeld.style.color = 'red';
} else {
    kontostandFeld.style.color = 'green';
}
kontostandFeld.textContent = kontostand + '€';

// let body = document.querySelector('body');
// // innerHTML setzt den HTML-Text (Inhalt eines Elements)
// // innerHTML = ''; <-- leerer Inhalt
// body.innerHTML = '';
// // 
// body.innerHTML = '<h1>Willkommen</h1><p>Das ist ein Text</p>';