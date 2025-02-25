const Employee = require('./Employee');
const SalaryController = require('./SalaryController');

// Create Data | OOP
let teo = new Employee("Teo", 12000);
let ti = new Employee("Ti", 11000);

// Init controller, process user-defined data | FP
let salaryController = new SalaryController();

// Get the evaluated result
const totalSalary = salaryController.getTotalSalary([teo, ti]);
console.log(totalSalary)
