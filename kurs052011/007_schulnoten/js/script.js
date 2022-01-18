let schulnote = prompt('Schulnote eingeben:', 3);

switch(schulnote)
{
    case '1': 
        console.log('Sehr gut');
        break; // damit switch-case beendet wird
    case '2':
        console.log('Gut');
        break;
    case '3':
        console.log('Befriedigend');
        break;
    case '4':
        console.log('Genügend');
        break;
    case '5':
        console.log('Nicht genügend');
        break;
    default: {
        console.log(`${schulnote} ist eine ungültige Eingabe`);
    }
}