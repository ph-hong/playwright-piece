import Robot from "./Robot";

class DogRobot extends Robot {
    static {
        this.id = 10;
    }

    getId(): number {
        return DogRobot.id;
    }
}

const dog = new DogRobot();
console.log(dog.getId());

// id: da duoc khai bao ben class Robot
