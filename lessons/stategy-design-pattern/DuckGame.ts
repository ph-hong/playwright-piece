import BabyDuck from "./BabyDuck";
import Duck from "./Duck";
import DuckController from "./DuckController";
import MallarDuck from "./MallarDuck";
import Quack from "./Quack";

let babyDuck: Duck = new BabyDuck();
let mallarDuck: MallarDuck = new MallarDuck();

//Something happens magically
babyDuck.setQuackBehaviour(new Quack);

DuckController.performQuack(babyDuck);
DuckController.performQuack(mallarDuck);

