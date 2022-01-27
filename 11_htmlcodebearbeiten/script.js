// suche das erste Element mit <h1>
let h1Title = document.querySelector('h1');
// setze den Text für dieses Element
h1Title.textContent = 'My Account';

// suche das Element für First Name
let spanFirstName = document.querySelector('[data-first-name]');
spanFirstName.textContent = 'Alex';

// suche das Element mit data-last-name
let spanLastName = document.querySelector('[data-last-name]');
spanLastName.textContent = 'Muster';

// suche das Element mit id="address"
let pAddress = document.getElementById('address');
pAddress.textContent = 'Hauptstrasse 7';

// suche das Element mit id="email"
let pEmail = document.getElementById('email');
pEmail.textContent = 'alex@example.com';

pEmail.style.color = 'red';
pEmail.style.textDecoration = 'underline';