// script.js

let n = 10;
let m = 15;

for(let i = n; i <= m; i++){
    let p = document.createElement('p');

    // Prüfen ob Zahl gerade oder ungerade ist
    if(i % 2 == 0){
        p.innerText = `${i} is even.`;
    } else {
        p.innerText = `${i} is odd.`;
    }
    document.body.appendChild(p);
}