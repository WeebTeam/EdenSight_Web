import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  //username = 'bneo99';
  //password = 'chicken';

  constructor(private loginService:LoginService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    //add auth header into request
    //credentials encoded in base64
    request = request.clone({
      setHeaders: {
        Authorization: `Basic ${this.loginService.getCredentials()}`
      }
    });

    return next.handle(request);
  }
}
