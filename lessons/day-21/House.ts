// Require: Immutable Object
export default class House {
    private topRoofColor: string;
    private windowNumber: number;
    private color: string;
    private mainDoorNumber: number;

    constructor(topRoofColor: string, windowNumber: number, color: string, mainDoorNumber: number) {
        this.topRoofColor = topRoofColor;
        this.windowNumber = windowNumber;
        this.color = color;
        this.mainDoorNumber = mainDoorNumber;
    }

    // Getters, Setters
    getTopRoofColor(): string {
        return this.topRoofColor;
    }
    getWindowNumber(): number {
        return this.windowNumber;
    }
    getColor(): string {
        return this.color;
    }
    getMainDoorNumber(): number {
        return this.mainDoorNumber;
    }
}

let teoHouse = new House("Red", 10, "White", 5);
let tiHouse = new House("Blue", 8, "Red", 2);


