var myName = 'Nizar';
console.log('Hello, ' + myName + '!');
console.log("Hello, " + myName + "!");
// myName = 9999;
myName = 'Maria';
console.log('Hello, ' + myName + '!');
console.log("Hello, " + myName + "!");
var myLuckyNumber = 42;
// myLuckyNumber = "blah";
myLuckyNumber = 9999;
var isHungry;
isHungry = true;
// isHungry = 'definitely';
isHungry = false;
var emptyThang = undefined;
var x;
// --------------------------------------------------------------------
function quadruple(x) {
    return x * x * x * x;
}
console.log(quadruple(100));
// console.log( quadruple('hi') );
// ---------------------------------------------------------------------
var wildWestArray = [9000, 'blah', { wat: '???' }];
var myArray = [];
var otherArray = [];
// WRONG TYPE
// myArray.push(9999);
myArray.push('hot dogs');
function average(numbers) {
    var total = 0;
    numbers.forEach(function (oneNum) {
        total += oneNum;
    });
    return total;
}
// WRONG TYPE (not an array of numbers)
// console.log( average(wildWestArray) );
var revenueThisWeek = [100, 88, 271, 98, 10];
console.log(average(revenueThisWeek));
