import { Component, Input, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})

export class StudentsComponent implements OnInit {
  @Input() studentName: string = '';
  @Input() studentStatus: string = '';
  @Input() index: number;
  @Input() id: number
  getColor() {
    if(this.studentStatus === 'present') {
      return 'green';
    } else if(this.studentStatus === 'absent') {
      return 'red';
    } else {
      return 'white';
    }
  }

  constructor(private studentService: StudentService) {
  }
  onSwitch() {
    if (this.studentStatus === 'present') {
      this.studentService.switchOffOne(this.index);
    } else if (this.studentStatus === 'absent') {
      this.studentService.switchOnOne(this.index);
    }
  }

  getStatus() {
    return this.studentStatus;
  }
  ngOnInit(): void {
  }


}
