import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AppComponent } from '../app.component';
import { HttpService } from '../services/http.service';
import { User } from '../models/user.model';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  ngOnInit(): void {
    this.authStatus = this.authService.isAuth;
  }

  /*TODO*/
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
          alert('Identifiant ou mot de passee incorrect');
        }
      },
    );
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
