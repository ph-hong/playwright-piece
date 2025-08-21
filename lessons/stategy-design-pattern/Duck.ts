import FlyBehaviour from "./FlyBehaviour";
import QuackBehaviour from "./QuackBehaviour";

export default class Duck {

    protected flyBehaviour: FlyBehaviour;
    protected quackBehaviour: QuackBehaviour;

    constructor(flyBehaviour: FlyBehaviour, quackBehaviour: QuackBehaviour) {
        this.flyBehaviour = flyBehaviour;
        this.quackBehaviour = quackBehaviour;
    }
    //22:30
    performFly(): void {
        this.flyBehaviour.fly()
    }
    performQuack(): void {
        this.quackBehaviour.quack();
    }

    setFlyBehaviour(flyBehaviour: FlyBehaviour): void {
        this.flyBehaviour = flyBehaviour;
    }

    setQuackBehaviour(quackBehaviour: QuackBehaviour): void {
        this.quackBehaviour = quackBehaviour;
    }
} 