import Duck from "./Duck";
import Squeak from "./Squeak";
import FlyNoWay from "./FlyWithNoWay";

export default class BabyDuck extends Duck {
    constructor() {
        super(new FlyNoWay(), new Squeak());
    }
}