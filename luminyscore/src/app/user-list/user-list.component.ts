import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../models/user.model';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
  users: User[];
  userSubscription: Subscription;
  constructor(private userService: UserService,private http: HttpService) { }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  ngOnInit(): void {
    console.log("c'est le get");
    this.userSubscription = this.http.getUsers().subscribe(
    (users: User[]) => {
      this.users = users;
    });
  }

  onSuppress(firstName) {
    if(confirm('Etes-vous sûr de la supprimer ?')) {
      this.suppressUser(firstName);
    } else {
      return null;
    }
  }

  suppressUser(firstName) {
    this.http.suppUser(firstName).subscribe((result)=>{
      if(result.status === 200) {
        this.ngOnInit();
      } else {
        alert('le User n\'existe pas !');
      }
    })
  }

}
