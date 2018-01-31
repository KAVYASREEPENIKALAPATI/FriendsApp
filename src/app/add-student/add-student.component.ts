import { Component, OnInit } from '@angular/core';
import {StudentService} from '../service/student.service';
import {Student} from '../models/student.model';
import {Router} from '@angular/router';
import {Score} from '../models/score.model';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  
 Id:string;
 Name:string;
 Age:number;
 student:Student;
Scores:Score[];
  constructor( private studentService:StudentService,private router:Router) { 
    
    this.Scores=[new Score("",0),new Score("",0),new Score("",0)];

  }

  ngOnInit() {
  }
 addStudent(){
   this.student = new Student(this.Id ,this.Name,this.Age,this.Scores);
  
   this.studentService.addStudent(this.student);
   this.router.navigate(['/show'],{skipLocationChange:true});
 }
}
