import { Component, OnInit } from '@angular/core';
import {StudentService} from  '../service/student.service';
import {Student} from '../models/student.model';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
 students:Student[];

  constructor(private studentService:StudentService) {
    this.students=this.studentService.getStudents();
   }

  ngOnInit() {
  }

}
