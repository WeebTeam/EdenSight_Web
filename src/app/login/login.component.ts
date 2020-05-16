import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";
  error = "";

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login(this.username, this.password)
    .subscribe(

      error => (this.error = error)
    );
  }
}
