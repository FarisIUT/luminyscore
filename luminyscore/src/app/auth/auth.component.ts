import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AppComponent } from '../app.component';
import { HttpService } from '../services/http.service';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private app: AppComponent,
    private httpService: HttpService,
    private formBuilder: FormBuilder
  ) {}

  authStatus: boolean = false;

  initForm() {
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', [Validators.required, Validators.minLength]],
    });
  }

  ngOnInit() {
    this.initForm();
  }

  onSignIn() {

    const formValue = this.authForm.value;

    const user = new User(
      null,
      null,
      formValue['email'],
      formValue['mdp'],
      null
    );

    this.httpService.signIn(user).subscribe(
      (response) => {
        if (response && response.mdp === 'ok') {
          alert('Connection effectuée');
          this.router.navigate(['/compte']);
        } else {
          alert('Identifiant ou mot de passe incorrect');
        }
      },
      (e) => {
        console.log('erreur', e);
      }
    );
  }
  tcheat(){
    this.authStatus = true;
    this.app.authStatus = true;
    this.authService.isAuth = true
    this.router.navigate(['/compte']);

  }
  onCreateAccount() {
    this.router.navigate(['createaccount']);
  }

  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
    this.app.authStatus = false;
  }
}
