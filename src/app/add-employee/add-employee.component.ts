import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../service/employee.service';
import {Employee} from '../models/employee.model';
import {Router} from '@angular/router';
import {Salary} from '../models/salary.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  Id:string;
  Name:string;
  Age:number;
  employee:Employee;
  Salarys:Salary[];

  constructor(private employeeService:EmployeeService,private router:Router) {
    this.Salarys=[new Salary("",0),new Salary("",0),new Salary("",0)];
   }

  ngOnInit() {
  }
  addEmployee(){
    this.employee = new Employee(this.Id ,this.Name,this.Age,this.Salarys);
   
    this.employeeService.addEmployees(this.employee);
    this.router.navigate(['/show'],{skipLocationChange:true});
  }

}
