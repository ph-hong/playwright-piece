import QuackBehaviour from "./QuackBehaviour";

export default class Squeak implements QuackBehaviour{

    quack(): void {
        console.log("I can Squeak Squeak!");
    }
    
}