let bottles = prompt('Wie viele Flaschen sind auf Lager?');

let boxQuantity = prompt('Wie viele Flaschen passen in einen Karton?');

let boxes = bottles / boxQuantity;
boxes = parseInt(boxes);

let leftover = bottles % boxQuantity;
let missingBottles = boxQuantity - leftover;


let resultTag = document.getElementById('result');

let output = '<h1>Flaschen-Verpackungsmaschine</h1>';

output = output + `<p>Sie haben ${bottles} Flaschen auf
                Lager. Sie können damit ${boxes} 
                Kartons voll befüllen.</p>`;

output += `<p>Dabei bleiben ${leftover} Flaschen über. 
            Produzieren Sie weitere ${missingBottles} 
            Flaschen um auch den letzten Karton zu befüllen.</p>`;

resultTag.innerHTML = output;
console.log(output);