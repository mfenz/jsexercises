 // script.js
let width = window.screen.width;
let height = window.screen.height;
let pixel = width * height;

document.getElementById("hoehe").innerText = width;
document.getElementById("breite").innerText = height;
document.getElementById("anzahl").innerText = pixel;


let jetzt = new Date();
let systemdatum = `${jetzt.getDate()}.${jetzt.getMonth()}.${jetzt.getFullYear()} ${jetzt.getHours()}:${jetzt.getMinutes()}`;

document.getElementById('syszeit').innerText = systemdatum;