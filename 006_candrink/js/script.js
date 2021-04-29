let alter = prompt('Wie alt sind Sie?', 18);

if(alter >= 16 && alter <= 20)
{
    let land = prompt('Wo befinden Sie sich?', 'USA');
    if(land == 'USA')
    {
        console.log('No.');
    } else 
    {
        console.log('Yes.');
    }
} else if(alter >= 21)
{
    console.log('Yes.');
} else {
    console.log("No.");
}