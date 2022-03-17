function onTry(event)
{
    event.preventDefault();
    
    // Generiere eine Zufallszahl zwischen 1 und 100
    let number = Math.floor(Math.random() * 100) + 1;
    console.log('Ich (Computer) denke mir eine Zahl zwischen 1 und 100 aus. Erledigt!'); 

    // solange die vom User geratene Zahl ungleich der Zufallszahl ist ...
    let guess = 0;
    let counter = 0;
    while(guess != number)
    {
        counter++;

        // User um eine neue geratene Zahl fragen
        guess = prompt(`${counter}. Versuch: Zahl zwischen 1 und 100:`);

        if(guess < number)
        {
            alert('Die gesuchte Zahl ist größer!');
        } 
        else if(guess > number)
        {
            alert('Die gesuchte Zahl ist kleiner!');
        }
    }
    // an diese Stelle kommt man nur wenn die Zahl richtig erraten wurde
    alert(`Gratulation! ${guess} ist die richtige Zahl! Du hast ${counter} Versuche benötigt!`);
}

let btTry = document.querySelector('[name=bt_try]');
btTry.addEventListener('click', onTry);