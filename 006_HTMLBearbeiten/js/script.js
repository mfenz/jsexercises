 // script.js
let heading = document.querySelector("h1");
heading.textContent = "User management";

let firstName = "Bob";
let htmlFirstName = document.getElementById("first-name");
htmlFirstName.textContent = firstName;

let htmlLastName = document.querySelectorAll("[data-last-name]");
htmlLastName.forEach(value => {
    value.textContent = "asdf";
});
htmlLastName.textContent = "Nix";

// data selector
let ln2 = document.querySelector("[data-last-name]");
ln2.textContent = "Maier";