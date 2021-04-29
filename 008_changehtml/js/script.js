// Knoten in DOM-Baum finden
let h1Title = document.getElementById('title');

// Knoten bearbeiten
h1Title.textContent = "Hello World";

document.querySelector('h2').textContent = "h2 geändert";

let tfUsername = document.querySelector('[name=uname]');
// Wert im Textfeld setzen
tfUsername.value = "user1234"
// Wert aus Textfeld auslesen
let username = tfUsername.value;
console.log(`Username: ${username}`);

// Container finden
let div = document.querySelector('div');
// Neues Element erstellen (p-Element) und auf Variable speichern
let p = document.createElement('p');
// Text für neues p-Element setzen
p.textContent = "Hallo";
// Child-Element in Container einfügen
div.appendChild(p);