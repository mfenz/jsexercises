/**
 * Findet die kleinste Zahl in einer Liste
 * Beispiel:
 * [9, 3, 85, 2, 44, 345, 2342, 42,34, 1 ,346 ,234, 254,3, 2,3423, 46]
 * --> 2 ist die kleinste Zahl in der Liste
 * 
 * - Starte bei der ersten Zahl von links
 * - gehe Zahl für Zahl die Liste durch und schaue ob die aktuelle Zahl
 *   kleiner ist als die bisher kleinste Zahl 
 *   - falls kleiner als als bisher kleinste: ersetze die bisher kleinste Zahl
 *   - falls größer oder gleich als bisher kleinste: nix
 * - wenn es keine weitere Zahl zum Vergleichen gibt, dann ist die 
 *   bisher kleinste Zahl die gesuchte kleinste Zahl
 */

let zahlen = [9, 3, 7, 32, 99, 2, 7]; 
let preise = [99.99, 4.12, 4.44, 1.99];

/**
 * Findet die Kleinste Zahl in einer Liste
 * Name der Funktion: minInList
 * Parameterliste in den runden Klammern
 * - Parameter "l": Die Liste in der die kleinste Zahl gesucht wird
 * Parameter werden verwendet um Werte in die Funktion hineinzubekommen
 * In diesem Beispiel wird die Liste in der wir nach der kleinsten Zahl 
 *   suchen auf die Variable "l" kopiert. 
 */
function minInList(l)
{
    // l=[9, 3, 6, 4, 5]
    // l=[4]
    // Über die Liste mit einer Schleife iterieren

    // Am Anfang ist das Minimum die erste Zahl in der Liste
    let min = l[0];

    // von links nach rechts jede Zahl durchgehen
    for(let i = 0; i < l.length; i++)
    {
        // Hole jede Zahl Schritt für Schritt aus der Liste heraus
        let zahl = l[i];

        // Vergleiche das bisherige Minimum und die aktuelle Zahl
        // wenn aktuelle Zahl < min, dann neues Minimum gefunden
        if(zahl < min)
        {
            // neues Minimum gefunden
            // das neue Minimum ist die aktuelle Zahl
            min = zahl;
        }
    } 

    // Nachdem ich mir jedes Element der Liste angesehen habe 
    // muss auf der Variable "min" die kleinste Zahl der Liste stehen

    // Beende Funktion und gebe die gefundene kleinste Zahl als Ergebnis zurück
    return min;
}

// Aufruf der Funktion minInList
// minimum ist gleich das Ergebnis des Funktionsaufrufs
let minimum = minInList(zahlen);
console.log(`Das Minimum in der Liste ist ${minimum}`);