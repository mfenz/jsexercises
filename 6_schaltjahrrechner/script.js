// Die Inputs, Button, ... referenzieren
let inputYear = document.querySelector('[name=year]');
let btCalculate = document.querySelector('[name=btcalculate]');
let divResult = document.getElementById('result');

/**
 * Verknüpfe einen "click" auf btCalculate mit der 
 * Ausführung der Function onButtonClicked
 */
btCalculate.addEventListener('click', onButtonClicked);

function onButtonClicked(event)
{
    // Verhindere das Neuladen der Seite beim Button-Klick
    event.preventDefault();

    let year = inputYear.value;
    if(year % 4 == 0 && year % 100 != 0){
        divResult.innerHTML = `<p>${year} ist ein Schaltjahr!</p>`;
    } else if(year % 100 == 0 && year % 400 != 0) {
        divResult.innerHTML = `<p>${year} ist kein Schaltjahr!</p>`;
    } else if(year % 400 == 0) {
        divResult.innerHTML = `<p>${year} ist ein Schaltjahr!</p>`;
    } else {
        divResult.innerHTML = `<p>${year} ist kein Schaltjahr!</p>`;
    }


    console.log(inputYear.value);
}