import Employee from "./Employee";
import { ASC, DESC } from "./SortRuleType"

export default class EmployeeController {

    getTotalSalary(employeeList: Employee[]): number {
        let totalSalary = 0;
        for (const employee of employeeList) {
            totalSalary += employee.getSalary();
        }
        return totalSalary;
    }

    getHighestSalaryEmp(employeeList: Employee[]) {
        let highestSalary = employeeList[0];
        for (const employee of employeeList) {
            if (employee.getSalary() > highestSalary.getSalary()) {
                highestSalary = employee;
            }
        }
        return highestSalary;
    }

    sortByName(employeeList: Employee[], rule: string): Employee[] {
        if (rule === ASC) {
            return employeeList.sort((a, b) => a.getName().localeCompare(b.getName()));
        } else if (rule === DESC) {
            return employeeList.sort((a, b) => b.getName().localeCompare(a.getName()));
        } else {
            this.printInvalidRule
            return employeeList;
        }
    }

    sortBySalary(employeeList: Employee[], rule: string): Employee[] {
        if (rule === ASC) {
            return employeeList.sort((a, b) => a.getSalary() - (b.getSalary()));
        } else if (rule === DESC) {
            return employeeList.sort((a, b) => b.getSalary() - (a.getSalary()));
        } else {
            this.printInvalidRule;
            return employeeList
        }
    }

    private printInvalidRule() {
        console.error("Invalid rule");

    }
}