import {Student} from '../models/student.model';
import {Score} from '../models/score.model';
export class StudentService{
    students:Student[];
    constructor(){
    this.students=[
        new Student("S001","Ramu",22,[
            new Score("English",90),
            new Score("Maths",90),
            new Score("Science",90)
        ])
    ];
    }
    getStudents():Student[]{
        return this.students;
    }
    addStudent(student:Student){
        this.students.push(student);
    }
}