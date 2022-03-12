import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
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
    private router: Router,
    private httpService: HttpService
  ) {}

  initForm() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', [Validators.required, Validators.minLength]],
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
      null
    );

    this.httpService.createUser(newUser).subscribe(
      (response) => {
        if (response && response.firstName === 'ok') {
          alert('User créé');
          this.router.navigate(['/compte']);
        } else {
          alert('User Existe !');
        }
      }
    );
  }
}
