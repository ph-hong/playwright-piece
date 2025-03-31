const Animal = require('./Animal');

class Horse extends Animal {
    constructor() {
        super('Horse', 75);
    }
}
module.exports = Horse;