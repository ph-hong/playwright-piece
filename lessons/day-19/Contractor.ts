import Employee from "./Employee";

export default class Contractor extends Employee {
    
    constructor() {
        super(10 * 1000);
    }
    setBonus(): void {
        this.bonus = 0;
    }
}