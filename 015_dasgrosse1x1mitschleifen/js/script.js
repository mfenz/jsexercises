
// i += 1 ist gleich wie i++ oder i = i + 1
for(let i = 1; i <= 10; i += 1)
{
    for(let j = 1; j <= 10; j++)
    {
        let ergebnis = i * j;
        // Ausgabe String erzeugen (z. B. 4 x 3 = 12)
        let str = i + " x " + j + " = " + ergebnis;

        // HTML Element für Ausgabe erstellen
        let pErgebnis = document.createElement('p');
        pErgebnis.textContent = str;

        // Wenn i eine gerade Zahl ist, Ergebnis rot darstellen
        if(i % 2 == 0)
        {
            pErgebnis.style.color = 'red';
        }

        // Element im DOM-Baum hinzufügen
        document.body.appendChild(pErgebnis);
    }
}