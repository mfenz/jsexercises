 // script.js
// HTML-Element über Tag referenzieren
let heading = document.querySelector("h1");
heading.textContent = "User management";

let firstName = "Bob";
// HTML-Element über ID referenzieren
let htmlFirstName = document.getElementById("first-name");
htmlFirstName.textContent = firstName;

// Element im DOM-Baum finden, 
// dann direkt mit der Referenz die Eigenschaft ändern
//document.getElementById("first-name").innerText = "Susi";

// data selector
let lastName = document.querySelector("[data-last-name]");
lastName.textContent = "Maier";