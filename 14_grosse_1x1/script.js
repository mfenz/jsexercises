
for(let a = 1; a <= 10; a++)
{
    for(let b = 1; b <= 10; b++)
    {
        let ergebnis = a * b;
        console.log(`${a} x ${b} = ${ergebnis}`);
        document.getElementById('result').innerHTML += 
            `<p>${a} x ${b} = ${ergebnis}</p>`;
    }
    
}