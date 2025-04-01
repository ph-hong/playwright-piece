"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmployeeController = /** @class */ (function () {
    function EmployeeController() {
    }
    EmployeeController.getTotalSalary = function (employeeList) {
        var totalSalary = 0;
        for (var _i = 0, employeeList_1 = employeeList; _i < employeeList_1.length; _i++) {
            var employee = employeeList_1[_i];
            totalSalary += employee.getSalary();
        }
        return totalSalary;
    };
    EmployeeController.getHighestSalaryEmp = function (employeeList) {
        var highestSalary = employeeList[0];
        for (var _i = 0, employeeList_2 = employeeList; _i < employeeList_2.length; _i++) {
            var employee = employeeList_2[_i];
            if (employee.getSalary() > highestSalary.getSalary()) {
                highestSalary = employee;
            }
        }
        return highestSalary;
    };
    return EmployeeController;
}());
exports.default = EmployeeController;
