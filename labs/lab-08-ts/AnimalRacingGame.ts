import AnimalRacingController from "./AnimalRacingController";
import Horse from "./Horse";
import Tiger from "./Tiger";

let tiger = new Tiger("Meo Meo");
let horse = new Horse("La La");
const winner = AnimalRacingController.getWinner([tiger, horse]);

console.log(`Winner is ${winner.getName()} with speed ${winner.getSpeed()}`);

