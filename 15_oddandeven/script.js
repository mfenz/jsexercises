
let start = prompt('Startzahl:', 10);
let end = prompt('Bis:', 15);

for(let i = start; i <= end; i++)
{
    if(i % 2 == 0)
    {
        console.log(`${i} is even.`);
    }
    else
    {
        console.log(`${i} is odd.`);
    }
}

/**
 * For-Schleifen: weiß ich (schon bevor ich mit der Schleife starte) wie oft
 *    ein bestimmter Code ausgeführt werden soll. 
 * While-Schleifen: das Ende ist Anfangs unklar
 * 
 * Initialisierung: Initialisierung einer Laufvariable (z. B. i)
 * Schleifenbedingung: 
 *   - Prüft ob die Bedingung zutrifft, falls ja: Schleifenkörper ausführen
 *   - falls nein, Schleife zu Ende
 * Schleifenkörper: Der zu wiederholende Code
 * Veränderung: verändert idR die Laufvariable
 * 
 * for(Initialisierung; Schleifenbedingung; Veränderung)
 * {
 *   Schleifenkörper
 * }
 * 
 * 
 * while(Schleifenbedingung)
 * {
 *   Schleifenkörper
 * }
 */

// Odd and even mit for:
//  for(let i = 10; i <= 15; i++)
//  {
//      if(i % 2 == 0)
//      {
//          console.log(`${i} is even.`);
//      }
//      else
//      {
//          console.log(`${i} is odd.`);
//      }
//  }

// Odd and even mit while:
let i = 10;
while(i <= 15)
{
    // Schleifenkörper
    if(i % 2 == 0){
        console.log(`${i} is even.`);
    } else {
        console.log(`${i} is odd.`);
    }

    // Veränderung
    i++;
}