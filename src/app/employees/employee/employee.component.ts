import {Component,Input} from '@angular/core';
import {Employee} from '../../models/employee.model';
@Component({
    selector:'app-employee',
    templateUrl:'./employee.component.html',

})
export class EmployeeComponent{
 @Input() employee:Employee;
 
}