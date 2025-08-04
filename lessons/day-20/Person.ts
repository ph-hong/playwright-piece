export default class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.validateAge(age);
        this.name = name;
        this.age = age;
    }

    // Service method
    setAge(age: number) {
        this.validateAge(age);
        this.age = age;
    }

    // Support method
    private validateAge(age: number) {
        if (age < 0) {
            throw Error("Age mus be greater than 0")
        }
    }
}