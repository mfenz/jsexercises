// script.js


let text = "jeden sonntag gibt es gemüse";
let split = text.split(" ");

let result = "";
for(let i = 0; i < split.length; i++){
    result += split[i].charAt(0).toUpperCase();
    result += split[i].substr(1);
    result += " ";
}

let p = document.createElement('p');
p.innerText = result;
document.body.appendChild(p);