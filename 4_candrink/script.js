
// Das Alter der Person eingeben lassen
let age = prompt('Wie alt bist du?');

if(age < 16)
{
    alert('No.');
} 
else if(age >= 16 && age <= 20)
{
    let country = prompt('In welchem Land befindest du dich?');
    // .toUpperCase() wandelt einen String in Blockbuchstaben um
    if(country.toUpperCase() == 'USA')
    {
        alert('No.');
    } 
    else 
    {
        alert('Yes.');
    }
}
else 
{
    alert('Yes, welcome.');
}


/* 
if(age < 16)
{
    alert('No.');
}
if(age >= 16 && age <= 20)
{
    let country = prompt('In welchem Land befindest du dich?');
    if(country.toUpperCase() == 'USA')
    {
        alert('No.');
    } 
    else 
    {
        alert('Yes.');
    }
}
if(age > 20)
{
    alert('Yes, welcome.');
} 
*/