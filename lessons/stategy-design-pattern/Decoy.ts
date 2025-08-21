import Duck from "./Duck";
import Mute from "./Mute";
import FlyNoWay from "./FlyWithNoWay";

export default class Decoy extends Duck {
    constructor() {
        super(new FlyNoWay(), new Mute());
    }
}