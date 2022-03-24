
class Rechteck
{
    /**
     * Konstruktor:
     * Wann wird der Konstruktor aufgerufen?
     * - immer wenn ein Objekt mit dem new-Schlüsselwort erzeugt wird
     * 
     * Wozu dient der Konstruktor?
     * - erzeugt ein neues Objekt
     * - zur Initialisierung der Instanzvariablen mit Werten
     */
    constructor(a, b){
        // weise die Übergabeparameter den Instanzvariablen zu
        // Instanzvariablen sind Variablen die zu einem Objekt gehören
        this.a = a;
        this.b = b;
    }

    // Berechnet den Umfang des Rechtecks und gibt
    // den Umfang zurück
    umfang(){
        // Berechne den Umfang (rechts vom =)
        // und speichere das Ergebnis der Rechnung auf "umfang"
        let umfang = 2 * this.a + 2 * this.b;

        // beende die Methode Umfang, und gebe den Wert der 
        // Variable umfang zurück
        return umfang;
    }

    flaeche(){
        let flaeche = this.a * this.b;

        return flaeche;
    }
}

// Drei Objekte der Klasse Rechteck erzeugen
let o1 = new Rechteck(5, 10);
let o2 = new Rechteck(2, 2);
let o3 = new Rechteck(10, 3);

console.log(`Umfang für a=${o1.a} b=${o1.b} ist ${o1.umfang()}`);

let gesamtFlaeche = o1.flaeche() + o2.flaeche() + o3.flaeche();
console.log(`Die Fläche alle Rechtecke beträgt ${gesamtFlaeche} m2`);