let input = prompt('Ganze positive Zahl eingeben:');

let result = '';
for(let i = input.length - 1; i >= 0; i--)
{
    // Zeichen an der Stelle i herausholen
    let zeichen = input.charAt(i);

    if(zeichen == 0){
        result += 'null';
    } else if(zeichen == 1){
        result += 'eins';
    } else if(zeichen == 2){
        result += 'zwei';
    } else if(zeichen == 3){
        result += 'drei';
    } else if(zeichen == 4){
        result += 'vier';
    } else if(zeichen == 5){
        result += 'fünf';
    } else if(zeichen == 6){
        result += 'sechs';
    } else if(zeichen == 7){
        result += 'sieben';
    } else if(zeichen == 8){
        result += 'acht';
    } else if(zeichen == 9){
        result += 'neun';
    }
}
console.log(result);