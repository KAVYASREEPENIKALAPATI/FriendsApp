import {Score} from './score.model';
export class Student{
    Id:string;
    Name: string;
    Age:number;
    Scores:Score[];
    constructor(id,name,age,scores){
        this.Id=id;
        this.Name=name;
        this.Age=age;
        this.Scores=scores;
    }        
}