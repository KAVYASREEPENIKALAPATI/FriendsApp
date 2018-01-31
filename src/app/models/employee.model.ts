import {Salary} from './salary.model';
export class Employee{
    Id:string;
    Name: string;
    Age:number;
    Salarys:Salary[];
    constructor(id,name,age,salarys){
        this.Id=id;
        this.Name=name;
        this.Age=age;
        this.Salarys=salarys;
    }        
}