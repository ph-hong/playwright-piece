class Animal {
    constructor(name, maxSpeed) {
        this.name = name;
        this.speed = Math.floor(Math.random() * maxSpeed) + 1;
    }

    getName() {
        return this.name;
    }

    getSpeed() {
        return this.speed;
    }

}

module.exports = Animal;