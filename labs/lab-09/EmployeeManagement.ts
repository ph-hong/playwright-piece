import ContructorEmp from "./ContructorE";
import FTE from "./FTE";
import EmployeeController from "./EmployeeController";

const employees = [
    new ContructorEmp('Con-01', 12 * 1000),
    new ContructorEmp('Con-02', 10 * 1000),
    new FTE('Fte-01', 51 * 1000),
    new FTE('Fte-03', 52 * 1000),
    new FTE('Fte-02', 53 * 1000)
];

const totalSalary = EmployeeController.getTotalSalary(employees);
const highestSalaryEmp = EmployeeController.getHighestSalaryEmp(employees);

console.log(`Total salary: ${totalSalary}`);
console.log(`${highestSalaryEmp.getName()} has the highest salary of ${highestSalaryEmp.getSalary()}`);