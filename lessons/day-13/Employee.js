class Employee {
    constructor(name, salary) {
        this._name = name;
        this._salary = salary;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name;
    }
    get salary() {
        return this._salary;
    }

    set salary(salary) {
        this._salary;
    }
}

module.exports = Employee;