
import Employee from './Employee';

export default class FTE extends Employee {
    constructor(name: string, salary: number) {
        super(name, salary)
    }
    printSalary() {
        console.log(`Salary: ${this.salary}`);
    }
}