/**

Klassen repräsentieren etwas, z. B. ein Produkt, einen Kunden, ... 
Beim Erstellen von Klassen können Dinge in logische Einheiten gruppiert werden
- z. B. Produktname, Preis, Kategorie --> gruppiert in der Klasse Produkt

Klassen werden geschrieben um eigene Datentypen zu definieren. 
Klassen bündeln auch Daten, und fügen diesen Daten Tätigkeiten hinzu (Methoden)

Wir definieren eine Struktur (genannt Klasse), und dann verwenden wir
    diese Klasse um Objekte zu erzeugen. 

 */

// Die Klasse ist wie ein Bauplan
class Produkt 
{
    constructor(name, preis, kategorie)
    {
        // this bezieht sich immer auf das aktuelle Objekt
        this.name = name;
        this.preis = preis;
        this.kategorie = kategorie;
    }
}

// Objekte der Klasse erzeugen
// beim Aufruf von new Klassenname() wird der Konstruktor der Klasse aufgerufen
let f1 = new Produkt("Fahrrad Mountain XL", 499.99, "Räder");
console.log(`Name des Produkts: ${f1.name}`);
console.log(`Preis des Produkts: ${f1.preis}`);
console.log(`Kategorie des Produkts: ${f1.kategorie}`);

let schloss1 = new Produkt("Fahrradschloss Knackbar", 0.99, "Sicherheit");
console.log(`${schloss1.name} 
    in der Kategorie ${schloss1.kategorie} 
    kostet ${schloss1.preis}`);