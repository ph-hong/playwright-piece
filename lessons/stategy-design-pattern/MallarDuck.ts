import Duck from "./Duck";
import Quack from "./Quack";
import FlyWithWings from "./FlyWithWings";

export default class MallarDuck extends Duck {
    constructor() {
        super(new FlyWithWings(), new Quack());
    }
}