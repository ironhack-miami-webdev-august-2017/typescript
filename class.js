// ---------------------------------------------------------------
var Soldier = (function () {
    // Not needed when using "public" in the constructor
    // health: number;
    // strength: number;
    function Soldier(health, strength) {
        this.health = health;
        this.strength = strength;
        // Not needed when using "public" in the constructor
        // this.health = healthParam;
        // this.strength = strengthParam;
    }
    Soldier.prototype.receiveDamage = function (damage) {
        this.health -= damage;
    };
    return Soldier;
}());
var Viking = (function () {
    function Viking(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
    Viking.prototype.receiveDamage = function (damage) {
        this.health -= damage;
        return 'FOR ODIN!!!';
    };
    return Viking;
}());
var Saxon = (function () {
    function Saxon(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    Saxon.prototype.receiveDamage = function (damage) {
        this.health -= damage;
        return "Please don't kill me. 😅";
    };
    return Saxon;
}());
// ----------------------------------------------------------
var soldierA = new Soldier(100, 15);
var soldierB = new Soldier(50, 20);
console.log(soldierA.health);
// WRONG TYPE for "strength"
// const weirdSoldier = new Soldier(15, "hello");
var vikingA = new Viking('Ragnarr', 200, 20);
var vikingB;
// WRONG TYPE ("vikingB" needs a Viking object)
// vikingB = 'Erik';
vikingB = new Viking('Erik', 150, 25);
var saxonA = new Saxon(30, 5);
var saxonB = new Saxon(25, 7);
// -----------------------------------------------------------
function fight(firstOne, secondOne) {
    secondOne.receiveDamage(firstOne.strength);
    firstOne.receiveDamage(secondOne.strength);
    console.log(' FIRST health --> ' + firstOne.health);
    console.log('SECOND health --> ' + secondOne.health);
}
fight(vikingA, saxonB);
fight(soldierB, vikingB);
var PacifistHippie = (function () {
    function PacifistHippie(name, health, flower) {
        this.name = name;
        this.health = health;
        this.flower = flower;
    }
    PacifistHippie.prototype.receiveDamage = function (damage) {
        this.health -= damage;
        return 'That hurt man. Be cool.';
    };
    return PacifistHippie;
}());
var hippieA = new PacifistHippie('Hope', 10, 'marigold');
// WON'T WORK (hippies don't have a "strength" property)
// fight(hippieA, soldierA);
