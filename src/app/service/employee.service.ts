import {Employee} from '../models/employee.model';
import {Salary} from '../models/salary.model';
export class EmployeeService{
    employees:Employee[];
    constructor(){
    this.employees=[
        new Employee("S001","Ramu",22,[
            new Salary("Salary",9000),
            new Salary("Wages",890),
            new Salary("Insurance",1000)
        ])
    ];
    }
    getEmployees():Employee[]{
        return this.employees;
    }
    addEmployees(employee:Employee){
        this.employees.push(employee);
    }
}