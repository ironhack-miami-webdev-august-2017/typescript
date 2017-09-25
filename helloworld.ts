class Greeter {
    // this is the only TypeScript line in this program
    constructor(public message: string) { }

    sayHi() {
        return '<h1>' + this.message + '</h1>';
    }
}


// create a "Greeter" object
const theGreeterThang = new Greeter('Hello, TypeScript!');

// add the result of "sayHi()" to the DOM
document.body.innerHTML = theGreeterThang.sayHi();
