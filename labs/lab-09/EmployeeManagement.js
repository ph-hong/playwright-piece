"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContructorE_1 = require("./ContructorE");
var FTE_1 = require("./FTE");
var EmployeeController_1 = require("./EmployeeController");
var employees = [
    new ContructorE_1.default('Con-01', 12 * 1000),
    new ContructorE_1.default('Con-02', 10 * 1000),
    new FTE_1.default('Fte-01', 51 * 1000),
    new FTE_1.default('Fte-03', 52 * 1000),
    new FTE_1.default('Fte-02', 53 * 1000)
];
var totalSalary = EmployeeController_1.default.getTotalSalary(employees);
var highestSalaryEmp = EmployeeController_1.default.getHighestSalaryEmp(employees);
console.log("Total salary: ".concat(totalSalary));
console.log("".concat(highestSalaryEmp.getName(), " has the highest salary of ").concat(highestSalaryEmp.getSalary()));
