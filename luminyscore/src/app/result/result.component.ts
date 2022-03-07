import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StudentService } from '../services/student.service';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultViewComponent implements OnInit,OnDestroy {
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
