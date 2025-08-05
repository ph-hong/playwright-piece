import House from "./HouseWithBuilderDesignPattern";

let builder = new House.Builder();
let house: House = builder
                        .setTopRoofColor("Red")
                        .setWindowNumber(3)
                        .setColor("Blue")
                        .setMainDoorNumber(2)
                        .build();