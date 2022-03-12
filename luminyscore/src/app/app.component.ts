import { Component, Inject, OnInit, Input, OnDestroy } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Subscription, interval, of, map } from 'rxjs';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy, OnInit {
  secondes: number;
  counterSubscription: Subscription;
  authStatus: boolean = false;
  isAdmin: boolean = true;

  constructor(
    private studentService: StudentService,
    private auth: AuthService,
    private rout: Router
  ) {
    this.authStatus = this.auth.isAuth;
  }
  ngOnInit() {
    //const obs = of(1,2,3).pipe(map(v=>v+1));
    const counter = interval(0);
    this.counterSubscription = counter.subscribe((value) => {
      this.secondes = value;
    });
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }

  onSignOut() {
    this.auth.signOut();
    this.authStatus = this.auth.isAuth;
    this.rout.navigate(['auth']);
  }

  title = 'luminyScore';
}
