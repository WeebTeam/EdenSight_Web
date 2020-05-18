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
  //temp
  loginUrl: string = serverURL+'/auth/login';
  
  authHeader: string;

  constructor(private http: HttpClient) { }

  // save the
  login(username:string, password:string): Observable<string> {
    //encode the username:password and save to localstorage
    localStorage.setItem('basic_credentials', btoa(username + ':' + password));

    return this.http.post<string>(this.loginUrl, '');
  }

  // tries to access a resource on server to get user type
  // if credentials is valid server will return 200 with current user data
  // this lets us know what user it is and what routes(pages) to show
  checkCredentials(username:string, password:string): Observable<any> {
    //wip?
    return this.http.post<string>(this.loginUrl, '');
  }

  public getCredentials(): string {
    //ger credentials from localstorage
    return localStorage.getItem('basic_credentials');
  }

}
