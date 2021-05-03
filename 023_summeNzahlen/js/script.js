// script.js

let n = prompt("Was ist ihr n?", 5);

let rechenweg = "";
let summe = 0;
for(let i = 1; i <= n; i++){
    summe += i;
    rechenweg += i;
    if(i != n){
        rechenweg += " + ";
        
    }
}

let p = document.createElement('p');
p.innerText = `Die Summe der ersten ${n} natürlichen Zahlen beträgt ${summe}. Rechenweg: ${rechenweg}`;
document.body.appendChild(p);