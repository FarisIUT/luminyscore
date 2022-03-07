import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
  private users: User[] = [new User('Charles', 'Quint', 'charles.quint@lesrois.fr', 'License 3 informatique', ['webapplication', 'baby-foot'])];

  //users: User[];
  userSubject = new Subject<User[]>();

  constructor(){}
  emitUsers() {
    this.userSubject.next(this.users.slice());
  }
  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }


}
