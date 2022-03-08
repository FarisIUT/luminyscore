import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private app: AppComponent) { }
  authStatus: boolean = false;
  ngOnInit(): void {
    this.authStatus = this.authService.isAuth;
  }
  onSignIn() {
    this.authService.signIn().then(() => {
      alert('Sign in successful!');
      this.authStatus = this.authService.isAuth;

      this.router.navigate(['score']);
      this.app.authStatus = true;
    });
  }
//   onSignOut() {
//     this.authService.signOut();
//     this.authStatus = this.authService.isAuth;
//     this.app.authStatus = false;
//  }

}
