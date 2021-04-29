let alter = prompt('Wie alt sind Sie?', 40);

let verheiratet = false;
if(alter >= 70){ // Nur Personen >= 70 verheiratet!
    verheiratet = true;
}

if(verheiratet == true){
    console.log("Sie sind verheiratet!");
} else {
    console.log("Sie sind nicht verheiratet!");
}

if(alter >= 16 && alter < 18){
    console.log("Bier und Wein");
} else if(alter >= 18){
    console.log("Darf alles trinken!!");
} else {
    console.log("Darf nicht Alkohol trinken.");
}
