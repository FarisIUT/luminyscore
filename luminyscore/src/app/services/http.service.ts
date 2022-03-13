import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class HttpService {
  private serverUrl = 'http://localhost:8080/';
  constructor(private http: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  public signIn(user) {
    return this.http.post<User>(
      this.serverUrl + 'users/signin',
      user,
      this.httpOptions
    );
  }

  public getUsers() {
    return this.http.get(this.serverUrl + 'users');
  }

  public createUser(user): Observable<User> {
    return this.http.post<User>(
      this.serverUrl + 'users',
      user,
      this.httpOptions
    );
  }

  public editUser(user): Observable<User> {
    return this.http.post<User>(
      this.serverUrl + 'users/edit',
      user,
      this.httpOptions
    );
  }

  public suppressUser(firstName) {
    return this.http.delete<any>(this.serverUrl + 'users/' + firstName, {
      observe: 'response',
    });
  }

  public getDataMatch(timestamp): Observable<any> {
    return this.http.get(this.serverUrl + 'score/' + timestamp);
  }

  public getDataMatchbyId(id): Observable<any> {
    return this.http.get(this.serverUrl + 'score/s/' + id);
  }

  public getEventsMatch(id): Observable<any> {
    return this.http.get(this.serverUrl + 'score/events/' + id);
  }

  public likeMatch(id): Observable<any> {
    return this.http.post<any>(this.serverUrl + 'likes', id, this.httpOptions);
  }

  public getLikes(id) {
    return this.http.get(this.serverUrl + 'likes', this.httpOptions);
  }
}
