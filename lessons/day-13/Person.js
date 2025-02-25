// Class: is a template/blueprint to build an object
// Constructor is a special method to initialize an object from a class

class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    // Getter
    get name() {
        return this._name;
    }

    // Setter
    set name(name) {
        this._name = name;
    }
}

let teo = new Person("Teo", 18); // Invoke the contructor to create an object from the class

// Get
let name = teo.name;
console.log(name)

// Set
teo.name = "Teo Nguyen";
let teoAnh = teo.name;
console.log(teoAnh);

