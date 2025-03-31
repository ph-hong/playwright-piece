const Animal = require('./Animal');
const AnimalController = require('./AnimalController');
const Dog = require('./dog');
const Tiger = require('./Tiger');
const Horse = require('./Horse');


const dog = new Dog();
const tiger = new Tiger();
const horse = new Horse();
const animalController = new AnimalController();
const animal = new Animal();

const winner = animalController.getWinner([dog, tiger, horse]);
console.log(`Winner is ${winner.getName()}, with speed: ${winner.getSpeed()}`)