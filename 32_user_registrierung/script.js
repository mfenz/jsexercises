
class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
}


// In dieser Liste werden alle User gespeichert
let users = [];

function onRegister(event){
    event.preventDefault();
    
    // Daten aus dem Formular einlesen
    let email = document.getElementById('email').value;
    let pw = document.getElementById('password').value;
    let repeatPw = document.getElementById('repeat_password').value;

    // Eingabe überprüfen
    // trim löscht die Leerzeichen am Anfang um am Ende eines Strings weg
    email = email.trim();
    pw = pw.trim();
    repeatPw = repeatPw.trim();

    // In dieser Liste werden alle Fehlermeldungen gespeichert
    let errors = [];

    // Email muss @ Zeichen enthalten
    // wenn es kein @ Zeichen enthält ... Fehlermeldung!
    if(!email.includes('@')){
        errors.push('Email muss @ enthalten!');
    }
    // die Email-Adresse muss aus mind. 5 Zeichen bestehen
    if(email.length < 5){
        errors.push('Email zu kurz!');
    }
    // besteht das Passwort aus mind. 8 Zeichen?
    if(pw.length < 8){
        errors.push('Passwort muss aus mind. 8 Zeichen bestehen!');
    }

    // Passwort muss mind. 1 Großbuchstaben und 1 Zahl enthalten
    let countUppercase = 0;
    let countNumbers = 0;
    // Ich muss mir jedes Zeichen des Passworts ansehen, und schauen
    // ob es ein Großbuchstabe oder eine Zahl ist
    for(let i = 0; i < pw.length; i++){
        let c = pw.charAt(i);

        // steht in "c" eine Zahl?
        // isNan(c) gibt true zurück wenn c KEINE Zahl ist.
        if(!isNaN(c)){
            countNumbers++;
        }

        // "Hello World".toUpperCase() --> "HELLO WORLD"
        // "Hello World".toLowerCase() --> "hello world"
        // "Hello World!".toUpperCase() --> "HELLO WORLD!"
        // "Z" == "Z".toUpperCase()
        // "z" == "z".toUpperCase()
        // "!" == "!".toUpperCase()
        // "Z" == "Z".toUpperCase() && "Z".toLowerCase() != "Z".toUpperCase()
        if(c == c.toUpperCase() && c.toLowerCase() != c.toUpperCase()){
            countUppercase++;
        }
    }

    // mind. 1 Zahl?
    if(countNumbers < 1){
        errors.push('Passwort muss mind. 1 Zahl enthalten!');
    }
    if(countUppercase < 1){
        errors.push('Passwort muss mind. 1 Großbuchstaben enthalten!');
    }

    // Gab es Fehler?
    if(errors.length > 0){
        showErrorMessages(errors);
    } else {
        // keine Fehler, Registrierung durchführen...

        // User-Objekt erzeugen
        let user = new User(email, pw);

        // Objekt in die Liste von users einfügen
        users.push(user);

        // zeige alle User in der Tabelle ab 
        showUsers(users);
    }
}

/**
 * Stellt die User in der Tabelle dar
 * @param {*} users die darzustellenden User
 */
function showUsers(users){
    let html = '';
    // für jeden User in users ein <tr> erzeugen
    for(let i = 0; i < users.length; i++){
        // hole ein User-Objekt aus der Liste heraus
        let user = users[i];
        // für diesen User eine Tabellenzeile generieren
        let tr = `<tr>
                        <td>${user.email}</td>
                        <td>${user.password}</td>
                    </tr>`;
        // füge die Zeile in die Result-Variable "html" ein
        html += tr;
    }
    // Result-Variable "html" in die Tabelle schreiben
    document.getElementById('users').innerHTML = html;
}

function showErrorMessages(errors){
    let html = '<ul>';
    for(let i = 0; i < errors.length; i++){
        html += `<li>${errors[i]}</li>`;
    }
    html += '</ul>';
    document.getElementById('error_messages').innerHTML = html;
}

// Button mit der Function verknüpfen
document.querySelector('[name=bt_register]').addEventListener('click', onRegister);