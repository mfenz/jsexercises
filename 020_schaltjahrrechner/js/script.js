// script.js
let jahr = prompt('Welches Jahr soll überprüft werden?', 2000);

let schaltjahr = false;
if(jahr % 4 == 0 && jahr % 100 != 0){
    schaltjahr = true;
} else if(jahr % 100 == 0 && jahr % 400 != 0){
    schaltjahr = false;
} else if(jahr % 400 == 0){
    schaltjahr = true;
}

let p = document.createElement('p');
p.innerText = `Beim Jahr ${jahr} handelt es sich ${schaltjahr ? 'tatsächlich' : 'nicht'} um ein Schaltjahr.`;
document.body.appendChild(p);