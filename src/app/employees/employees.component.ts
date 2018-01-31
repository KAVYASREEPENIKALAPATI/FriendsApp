import { Component, OnInit } from '@angular/core';
import {EmployeeService} from  '../service/employee.service';
import {Employee} from '../models/employee.model';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees:Employee[];
  
    constructor(private employeeService:EmployeeService) {
      this.employees=this.employeeService.getEmployees();
     }
  

  ngOnInit() {
  }

}
