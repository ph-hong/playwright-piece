const Animal = require('./Animal');

class Tiger extends Animal {
    constructor() {
        super('Tiger', 100);
    }
}
module.exports = Tiger;