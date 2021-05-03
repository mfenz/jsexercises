// script.js

let filename = "img_43234.jpg";

let indexPoint = filename.indexOf('.');
let extension = filename.substr(indexPoint);

let p = document.createElement('p');
p.innerText = extension;
document.body.appendChild(p);