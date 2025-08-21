import FlyBehaviour from "./FlyBehaviour";

export default class FlyWithWings implements FlyBehaviour {
    fly(): void {
        console.log("I'm fly with wings");
    }
}