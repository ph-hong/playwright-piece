import Employee from "./Employee";

export default class EmployeeController {

    static getTotalSalary(employeeList: Employee[]): number {
        let totalSalary = 0;
        for (const employee of employeeList) {
            totalSalary += employee.getSalary();
        }
        return totalSalary;
    }

    static getHighestSalaryEmp(employeeList: Employee[]) {
        let highestSalary = employeeList[0];
        for (const employee of employeeList) {
            if (employee.getSalary() > highestSalary.getSalary()) {
                highestSalary = employee;
            }
        }
        return highestSalary;
    }

}