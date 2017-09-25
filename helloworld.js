var Greeter = (function () {
    // this is the only TypeScript line in this program
    function Greeter(message) {
        this.message = message;
    }
    Greeter.prototype.sayHi = function () {
        return '<h1>' + this.message + '</h1>';
    };
    return Greeter;
}());
// create a "Greeter" object
var theGreeterThang = new Greeter('Hello, TypeScript!');
// add the result of "sayHi()" to the DOM
document.body.innerHTML = theGreeterThang.sayHi();
