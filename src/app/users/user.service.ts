import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { User } from './user';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Authorization': 'Basic Ym5lbzk5OmNoaWNrZW4='
    //hardcode the username and password for now
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //temp 
  getAllUrl: string = 'http://192.168.0.100:3000/users/all';

  constructor(private http: HttpClient) { }

  /** GET users from the server */
  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(this.getAllUrl, httpOptions);
  }
}
