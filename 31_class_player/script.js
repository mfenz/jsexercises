/**
Player:
Zustand:
- name
- x, y
- health

Verhalten:
+ moveLeft()
+ moveRight()
+ moveUp()
+ moveDown()
+ greet()
+ receiveDamage(damage)
+ healthPotion()
+ giveDamage(player)
 */

class Player {
    // Der Konstruktor wird beim Erzeugen eines neuen Objekts aufgerufen
    // Er initialisiert die "Instanzvariablen" mit Startwerten
    // Instanzvariablen --> Zustand
    constructor(name, startX, startY){
        // Übergabeparameter dem Objekt zuweisen
        // this.name bezieht sich auf das Objekt,
        //   name bezieht sich auf den Übergabeparamter
        this.name = name;
        // im Objekt heißt die Variable "x", wird mit "startX" initialisiert
        this.x = startX;
        this.y = startY;

        // jeder Spieler startet mit 100 Lebenspunkten
        this.health = 100;
    }

    moveLeft(){
        if(this.x > 0){
            this.x--;
        }
        console.log(`${this.name} ist auf Position ${this.x} ${this.y}`);        
    }

    moveRight(){
        if(this.x < 100){
            this.x++;
        }
        console.log(`${this.name} ist auf Position ${this.x} ${this.y}`);  
    }

    moveUp(){
        if(this.y < 100){
            this.y++;
        }
        console.log(`${this.name} ist auf Position ${this.x} ${this.y}`);  
    }

    moveDown(){
        if(this.y > 0){
            this.y--;
        }
        console.log(`${this.name} ist auf Position ${this.x} ${this.y}`);  
    }

    greet(){
        console.log(`${this.name} grüßt!`);
    }

    greetPlayer(player){
        console.log(`${this.name} grüßt ${player.name}!`);
    }

    receiveDamage(damage){
        // health verringert sich um damage
        this.health -= damage;

        if(this.health <= 0){
            console.log(`${this.name} ist tot :(`);
        } else {
            console.log(`${this.name} erleidet ${damage} Schaden. (${this.health} Gesundheit verbleibend)`);
        }
    }

    giveDamage(player){
        // Spieler bekommt 1 - 10 Schaden
        player.receiveDamage(Math.floor(Math.random() * 10) + 1);
    }

    healthPotion(){
        let magicHealth = Math.floor(Math.random() * 50) + 10;
        this.health += magicHealth;
        console.log(`${this.name} bekommt ${magicHealth} Leben. 
            (${this.health} Leben verbleibend).`);
    }
}

let hansi = new Player("Hansi", 50, 100);
let susi = new Player("Susi", 90, 100);

susi.giveDamage(hansi);
susi.giveDamage(hansi);
hansi.healthPotion();

hansi.greetPlayer(susi);
for(let i = 0; i < 20; i++){
    hansi.giveDamage(susi);
    susi.giveDamage(hansi);

    if(hansi.health < 0 || susi.health < 0){
        break;
    }
}


hansi.moveLeft();
hansi.moveLeft();
hansi.moveDown();
susi.moveDown();
susi.moveLeft();
hansi.moveUp();
hansi.moveUp();