// <h1> suchen und in Variable title referenzieren
let title = document.querySelector('h1');
title.textContent = "My Account";

// <span data-first-name>First name</span>
let firstName = document.querySelector('[data-first-name]');
firstName.textContent = 'Alex';

// <span data-last-name>Last name</span> 
let lastName = document.querySelector('[data-last-name]');
lastName.textContent = 'Muster';

// <p id="address">Strasse Hausnummer</p>
let address = document.getElementById('address');
address.textContent = 'Hauptstrasse 7';

// <p id="email">Email address</p>
let email = document.getElementById('email');
email.textContent = 'alex@example.com';
// farbe: rot
email.style.color = 'red';
// unterstreichen
email.style.textDecoration = 'underline';