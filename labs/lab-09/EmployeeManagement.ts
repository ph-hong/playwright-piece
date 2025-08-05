import ContractorEmp from "./ContractorE";
import FTE from "./FTE";
import EmployeeController from "./EmployeeController";
import { ASC, DESC } from "./SortRuleType"

const employees = [
    new ContractorEmp('Con-01', 12 * 1000),
    new ContractorEmp('Con-02', 10 * 1000),
    new FTE('Fte-01', 51 * 1000),
    new FTE('Fte-03', 52 * 1000),
    new FTE('Fte-02', 53 * 1000)
];

const controller = new EmployeeController();
const totalSalary = controller.getTotalSalary(employees);
const highestSalaryEmp = controller.getHighestSalaryEmp(employees);

console.log(`Total salary: ${totalSalary}`);
console.log(`${highestSalaryEmp.getName()} has the highest salary of ${highestSalaryEmp.getSalary()}`);

const sortedByNameASC = controller.sortByName(employees, ASC);
console.log(`===1===Sorted by name ASC: ${JSON.stringify(sortedByNameASC)}`);
const sortedByNameDESC = controller.sortByName(employees, DESC);
console.log(`===1===Sorted by name DESC: ${JSON.stringify(sortedByNameDESC)}`);

const sortedBySalaryASC = controller.sortBySalary(employees, ASC);
console.log(`===2===Sorted by salary ASC: ${JSON.stringify(sortedBySalaryASC)}`);
const sortedBySalaryDESC = controller.sortBySalary(employees, DESC);
console.log(`===Sorted by salary DESC: ${JSON.stringify(sortedBySalaryDESC)}`);
