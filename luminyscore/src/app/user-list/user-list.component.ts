import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../models/user.model';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit, OnDestroy {
  users: User[];
  userSubscription: Subscription;

  constructor(private httpService: HttpService) {}

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.userSubscription = this.httpService
      .getUsers()
      .subscribe((users: User[]) => {
        this.users = users;
      });
  }

  onSuppress(firstName) {
    if (confirm('Etes-vous sûr de vouloir le supprimer ?')) {
      this.suppressUser(firstName);
    } else {
      return null;
    }
  }
  suppressUser(firstName) {
    this.httpService.suppressUser(firstName).subscribe((result) => {
      if (result.status === 200) {
        this.ngOnInit();
      } else {
        alert("l'utilisateur n'existe pas !");
      }
    });
  }
}
