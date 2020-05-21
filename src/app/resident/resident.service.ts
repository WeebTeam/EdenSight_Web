import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Resident } from './resident';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { serverURL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ResidentService {
  //temp
  getAllUrl: string = serverURL+'/residents/all';

  constructor(private http: HttpClient) { }

  /** GET users from the server */
  getAll (): Observable<Resident[]> {
    return this.http.get<Resident[]>(this.getAllUrl);
  }
}
