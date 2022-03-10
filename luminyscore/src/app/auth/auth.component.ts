import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AppComponent } from '../app.component';
import { HttpService } from '../services/http.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private app: AppComponent,
    private httpService: HttpService
  ) {}
  authStatus: boolean = false;

  ngOnInit(): void {
    this.authStatus = this.authService.isAuth;
  }

  /*TODO*/
  onSignIn() {
    this.httpService.signIn().subscribe(
      (response) => {
        if (response && response === 'ok') {
          alert('Connection effectuée');
        } else {
          alert('Identifiant ou mot de passee incorrect');
        }
      },
      (e) => {
        console.log('erreur', e);
      },
      () => {
        this.router.navigate(['/compte']);
      }
    );
  }

  onCreateAccount() {
    this.router.navigate(['createaccount']);
  }
  //   onSignOut() {
  //     this.authService.signOut();
  //     this.authStatus = this.authService.isAuth;
  //     this.app.authStatus = false;
  //  }
}
