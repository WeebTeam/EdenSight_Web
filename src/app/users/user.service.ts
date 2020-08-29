import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { User } from './user';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { serverURL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //temp
  getAllUrl: string = serverURL+'/users/all';

  constructor(private http: HttpClient) { }

  /** GET users from the server */
  getUsers (): Observable<any> {
    return this.http.get(this.getAllUrl);
  }
}
