import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.scss']
})

export class StudentViewComponent implements OnInit,OnDestroy {
  students: any[];
  @Input() id: number
  isAuth: boolean = false;
  lastUpdate = new Date();
  studentSubscription: Subscription;
  constructor(private studentService: StudentService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }

  ngOnInit() {
    this.studentSubscription = this.studentService.studentsSubject.subscribe(
      (students: any[]) => {
        this.students = students;
    });
    this.studentService.emitStudentSubject();
  }

  ngOnDestroy() {
    this.studentSubscription.unsubscribe();
  }
  allPresent() {
    alert("ils sont tous là");
    this.studentService.switchOnAll();
  }

  allAbsent() {
    if (confirm('Etes-vous sûr qu\’ils sont tous absents ?')) {
      this.studentService.switchOffAll();
    } else {
      return null;
    }
  }

}
