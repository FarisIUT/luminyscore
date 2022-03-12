import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators,FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { HttpService } from '../services/http.service';



@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private userService:UserService,private router: Router, private httpService: HttpService) {

  }
  initForm() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      diploma: ['', Validators.required],
      options: this.formBuilder.array([])

      });
  }

  ngOnInit() {
    this.initForm();
  }
  onSubmitForm() {
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['mdp'],
      formValue['admin']
    );
    this.userService.addUser(newUser);
    this.router.navigate(['/users']);
    this.httpService.createUser(newUser).subscribe((response)=>{
      if(response && response.firstName === 'ok') {
      alert('User crée');
      } else {
      alert('User Existe !');
      }
    });
  }
  getOptions(): FormArray {
    return this.userForm.get('options') as FormArray;
  }
  onAddOption() {
    const newOptionControl = this.formBuilder.control(null, Validators.required);
    this.getOptions().push(newOptionControl);
  }

}