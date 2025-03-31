// Type: Function Declaration
function add(a, b) {
    return a + b;
}

// Type: Function Expression
const add_ = function (a, b) {
    return a + b;
}

// Lexical this binding

// Object literal
// Lexical this binding
const person = {
    name: 'Hong',
    age: 30,
    sayHello: function () {
        setTimeout(() => {
            console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`)
        }, 2 * 1000);
    }

}
person.sayHello();

const array = [1, 2, 3, 4, 5];
const oddNums = array.filter(num => num % 2 !== 0);
console.log(oddNums);