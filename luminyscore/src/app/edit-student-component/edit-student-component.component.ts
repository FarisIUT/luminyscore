import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-student-component',
  templateUrl: './edit-student-component.component.html',
  styleUrls: ['./edit-student-component.component.scss']
})
export class EditStudentComponentComponent implements OnInit {

  constructor() { }
  onSubmit(form: NgForm) {
  console.log(form.value);
  }

  ngOnInit(): void {
  }

}
