import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { Validators } from '@angular/forms';
import { User } from '../models/user.model';

@Component({
  selector: 'app-moncompte',
  templateUrl: './moncompte.component.html',
  styleUrls: ['./moncompte.component.scss'],
})
export class MoncompteComponent implements OnInit {
  userForm: FormGroup;
  authedUser = JSON.parse(localStorage.getItem('user'));

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private httpService: HttpService
  ) {}

  initForm() {
    this.userForm = this.formBuilder.group({
      firstName: [this.authedUser.user.firstName, Validators.required],
      lastName: [this.authedUser.user.lastName, Validators.required],
      email: [
        this.authedUser.user.email,
        [Validators.required, Validators.email],
      ],
      mdp: [
        this.authedUser.user.mdp,
        [Validators.required, Validators.minLength],
      ],
    });
  }

  ngOnInit() {
    this.initForm();
  }

  onSubmitForm() {
    const formValue = this.userForm.value;

    const user = new User(
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['mdp'],
      false
    );

    this.httpService.editUser(user).subscribe((response) => {
      if (response && !this.isEmpty(response)) {
        alert('User modifié');
        localStorage.setItem('user', JSON.stringify(response));
        this.authedUser = JSON.parse(localStorage.getItem('user'));
        this.initForm();
        this.router.navigate(['compte']);
      } else {
        alert('Erreur lors de la modification');
      }
    });
  }

  isEmpty(response) {
    if (
      response &&
      Object.keys(response).length === 0 &&
      Object.getPrototypeOf(response) === Object.prototype
    ) {
      return true;
    } else {
      return false;
    }
  }
}
