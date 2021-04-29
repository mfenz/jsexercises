// Schreibe Sie ein Script das sowohl mit 
// einer for-Schleife, while-Schleife, 
// und do-while-Schleife die ganzen Zahlen 
// von 1 bis 10 ausgibt.

console.log("Ausgabe mit for-Schleife:");
// for(Initialisierung, Bedingung, Veränderung)
for(let i = 1; i < 11; i++)
{
    // Schleifenkörper

    console.log(i);
}

console.log("Ausgabe mit while-Schleife:");
let i = 1;
// while(Schleifenbedingung)
while(i <= 10)
{
    // Schleifenkörper

    // Ausgabe
    console.log(i);
    // Zahl erhöhen (am Ende des Schleifendurchgangs)
    i++;
}

console.log("Ausgabe mit do while Schleife:");

i = 1; // ohne let!!! weil zuvor schon deklariert
do {
    // Schleifenkörper

    console.log(i);
    i++;
} while(i < 11);
// while(Schleifenbedingung)