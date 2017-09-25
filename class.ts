interface FighterInterface {
    strength: number;
    health: number;

    receiveDamage(damage: number);
}

// ---------------------------------------------------------------

class Soldier implements FighterInterface {
    // Not needed when using "public" in the constructor
    // health: number;
    // strength: number;

    constructor(
      public health: number,
      public strength: number) {
        // Not needed when using "public" in the constructor
        // this.health = healthParam;
        // this.strength = strengthParam;
    }

    receiveDamage(damage: number) {
        this.health -= damage;
    }
}

class Viking implements FighterInterface {
    constructor(
      public name: string,
      public health: number,
      public strength: number
    ) { }

    receiveDamage(damage: number) {
        this.health -= damage;
        return 'FOR ODIN!!!';
    }
}


class Saxon implements FighterInterface {
    constructor(
      public health: number,
      public strength: number
    ) { }

    receiveDamage(damage: number) {
        this.health -= damage;
        return "Please don't kill me. 😅";
    }
}


// ----------------------------------------------------------

const soldierA = new Soldier(100, 15);
const soldierB = new Soldier(50, 20);

console.log( soldierA.health );

// WRONG TYPE for "strength"
// const weirdSoldier = new Soldier(15, "hello");

const vikingA = new Viking('Ragnarr', 200, 20);

let vikingB: Viking;
// WRONG TYPE ("vikingB" needs a Viking object)
// vikingB = 'Erik';
vikingB = new Viking('Erik', 150, 25);

const saxonA = new Saxon(30, 5);
const saxonB = new Saxon(25, 7);


// -----------------------------------------------------------


function fight (firstOne: FighterInterface, secondOne: FighterInterface) {
    secondOne.receiveDamage( firstOne.strength );
    firstOne.receiveDamage( secondOne.strength );

    console.log(' FIRST health --> ' + firstOne.health);
    console.log('SECOND health --> ' + secondOne.health);
}


fight(vikingA, saxonB);
fight(soldierB, vikingB);


class PacifistHippie {
    constructor (
        public name: string,
        public health: number,
        public flower: string
    ) { }

    receiveDamage(damage: number) {
        this.health -= damage;
        return 'That hurt man. Be cool.';
    }
}

const hippieA = new PacifistHippie('Hope', 10, 'marigold');

// WON'T WORK (hippies don't have a "strength" property)
// fight(hippieA, soldierA);
