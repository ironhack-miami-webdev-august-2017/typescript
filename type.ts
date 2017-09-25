let myName: string = 'Nizar';

console.log( 'Hello, ' + myName + '!');
console.log( `Hello, ${myName}!`);


// myName = 9999;
myName = 'Maria';

console.log( 'Hello, ' + myName + '!');
console.log( `Hello, ${myName}!`);



let myLuckyNumber: number = 42;

// myLuckyNumber = "blah";
myLuckyNumber = 9999;


var isHungry: boolean;

isHungry = true;
// isHungry = 'definitely';
isHungry = false;


let emptyThang: void = undefined;

let x: any;


// --------------------------------------------------------------------


function quadruple (x: number) {
    return x * x * x * x;
}


console.log( quadruple(100) );
// console.log( quadruple('hi') );


// ---------------------------------------------------------------------

const wildWestArray = [ 9000, 'blah', {wat: '???'} ];

const myArray    : string[]      = [];
const otherArray : Array<string> = [];

// WRONG TYPE
// myArray.push(9999);

myArray.push( 'hot dogs' );


function average (numbers: number[]) {
    let total = 0;

    numbers.forEach((oneNum) => {
        total += oneNum;
    });

    return total;
}

// WRONG TYPE (not an array of numbers)
// console.log( average(wildWestArray) );

const revenueThisWeek = [100, 88, 271, 98, 10];
console.log( average(revenueThisWeek) );
