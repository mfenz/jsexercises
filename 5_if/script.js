
// 

/**
 * Schlüsselwort: if
 * Bedingung: ein Vergleich (meist mit Vergleichsoperatoren)
 * Beim Vergleich kommt genau ein Wert heraus.
 * Dieser Wert hat IMMER den Datentyp boolean
 * Boolean kennt genau 2 Werte: true, false
 * 
 * Nach den runden Klammern mit der Bedingung folgt ein Codeblock.
 * Ein Codeblock wird immer mit einer geschwungenen Klammer geöffnet, 
 * und mit einer geschwungenen Klammer geschlossen. 
 * 
 * Die Anweisungen im Codeblock werden nur ausgeführt wenn die zuvor
 * geschriebene Bedingung erfüllt (true) ist. 
 * 
 * if(BEDINGUNG)
 * {
 * 
 * }
 * 
 * 
 * if(BEDINGUNG)
 * {
 *      Codeblock wird nur ausgeführt wenn die Bedingung erfüllt ist
 * }
 * else 
 * {
 *      Codeblock wird nur ausgeführt wenn die Bedingung NICHT erfüllt ist
 * }
 * 
 * if(zahl1 != 5);{
 * 
 * }
 * 
 * Codeblöcke und die Sichtbarkeit von Variablen:
 * Außerhalb des Codeblocks definierte Variablen sind
 * innerhalb des Codeblocks sichtbar. 
 * 
 * Innerhalb des Codesblocks definierte Variablen sind NICHT
 * außerhalb des Codeblocks sichtbar. 
 * 
 * Von außen nach innen --> OK
 * Von innen nach außen --> Nicht OK
 * 
 * if(10 % 5 == 0)
 * {
 *      let x = 1;
 *      if(x == 1)
 *      {
 *          x = 6; // von außen nach innen --> OK
 * 
 *          let name = 'ABC';
 *      }
 *      // DAS GEHT NICHT!!
 *      name = 'xyz';  // von innen nach außen --> NICHT OK
 * }
 * 
 */

if(false) {
    console.log('Guten Morgen!');
    if(false){
        console.log('A');
    } else {
        console.log('B');
    }
} else {
    if(true){
        console.log('C');
        if(false){
            console.log('D');
        }
        else if(true){
            console.log('E');
        }
    }
}