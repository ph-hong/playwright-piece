const Animal = require('./Animal');

class Dog extends Animal {
    constructor() {
        super('Dog', 60);
    }
}

module.exports = Dog;