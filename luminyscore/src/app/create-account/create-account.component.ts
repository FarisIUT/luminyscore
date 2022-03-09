import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent implements OnInit {
  userForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private httpService: HttpService
  ) {}
  initForm() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
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
      formValue['email']
    );
    this.userService.addUser(newUser);
    this.router.navigate(['/users']);
    this.httpService.createUser(newUser).subscribe((response) => {
      if (response && response.firstName === 'ok') {
        alert('User crée');
      } else {
        alert('User Existe !');
      }
    });
  }
}
