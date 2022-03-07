import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../services/student.service';


@Component({
  selector: 'app-single-student',
  templateUrl: './single-student.component.html',
  styleUrls: ['./single-student.component.scss']
})
export class SingleStudentComponent implements OnInit {

  constructor(private studentService: StudentService,private route: ActivatedRoute) {


   }
  name: string;
  status: string;
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.name = this.studentService.getstudentById(+id).name;
    this.status = this.studentService.getstudentById(+id).status;
  }


}
