import Contractor from "./Contractor";
import FTE from "./FTE";
import Employee from "./Employee";
import PartTimeEmployee from "./PartTimeEmployee";
import EmployeeController from "./EmployeeController";

const teo = new FTE();
const ti = new Contractor();
const tien = new PartTimeEmployee();
const totalSalary = EmployeeController.getTotalSalary([teo, ti, tien]);
console.log(`Total Salary: ${totalSalary}`);

// IS-A relationship