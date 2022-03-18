let months = ['Jänner', 'Februar', 'März', 'April',
    'Mai', 'Juni', 'Juli', 'August', 'September', 
    'Oktober', 'November', 'Dezember'];

// result: Jänner, Februar, März, ... 
let result = '';
for(let i = 0; i < months.length; i++)
{
    // hole Namen des Monats aus der Liste heraus
    let name = months[i];
    result += name;
    if(i != months.length - 1)
    {
        result += ', ';
    }
}

document.getElementById('months').innerText = result;

console.log(result);