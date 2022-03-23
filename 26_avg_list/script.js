let prices = [3, 8, 1, 4, 39, 20]; 

// Parameterliste in den runden Klammern
// - was in die Funktion hineinkommt
function averagePrice(prices)
{
    // Rechne alle Zahlen (die in der Liste vorkommen) zusammen

    // (Teil-) Summe
    let summe = 0;

    // Diese Schleife iteriert über alle Zahlen in der Liste prices
    for(let i = 0; i < prices.length; i++)
    {
        // Rechne jede Zahl zur (Teil-)Summe hinzu
        summe += prices[i];
    }

    // Durchschnitt: Gesamtsumme / Anzahl der Elemente
    let avg = summe / prices.length;

    // Beende die Funktion (return) und gebe den Wert in "avg" zurück
    return avg;
}

/**
 * Zeigt die Preise mit Beistrich getrennt an
 * @param {*} prices 
 */
function showPrices(prices)
{
    let result = '';
    for(let i = 0; i < prices.length; i++)
    {
        // hole Element an der Stelle i aus der Liste heraus
        // und füge es am Ende von Result ein
        result += prices[i];

        // wenn der Index kleiner ist als der Index des letzten Elements
        if(i < prices.length - 1)
        {
            // dann Beistrich und Leerzeichen einfügen
            result += ', ';
        }
    }
    // Schreibe result in HTML
    document.getElementById('numbers').innerText = result;
}

function showAveragePrice(avgPrice)
{
    document.getElementById('avg_result').innerText = `Durchschnitt: ${avgPrice}`;
}


/**
 * Ablauf:
 * User öffnet die Seite, JS-Code ausführen
 * 1) Berechne den Durchschnittspreis und speichere den ermittelten
 *    Durchschnittspreis auf einer Variable 
 * 2) Zeige den Listen-Inhalt im HTML an
 * 3) Zeige den berechneten Durchschnittspreis im HTML an
 */

// Schritt 1
let avgPrice = averagePrice(prices);

// Schritt 2
showPrices(prices);

// Schritt 3
showAveragePrice(avgPrice);