import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { serverURL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //temp?
  loginUrl: string = serverURL+'/auth/login';

  authHeader: string;

  constructor(private http: HttpClient) { }

  //check the credentials against the server,
  //if it is valid, save to localstorage and move to admin/staff page
  login(username:string, password:string): Observable<string> {
    //encode the username:password and save to localstorage
    localStorage.setItem('basic_credentials', btoa(username + ':' + password));

    return this.http.post<string>(this.loginUrl, '');
  }
  
  public getCredentials(): string {
    //get credentials from localstorage
    return localStorage.getItem('basic_credentials');
  }

}
