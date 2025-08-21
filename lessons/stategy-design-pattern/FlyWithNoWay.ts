import FlyBehaviour from "./FlyBehaviour";

export default class FlyNoWay implements FlyBehaviour {
    fly(): void {
        console.log("I'm can't fly");
    }
}