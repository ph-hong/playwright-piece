import QuackBehaviour from "./QuackBehaviour";

export default class Quack implements QuackBehaviour {
    
    quack(): void {
        console.log("I can Quack Quack!");
    }
}