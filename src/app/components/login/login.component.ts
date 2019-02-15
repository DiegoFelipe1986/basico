import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userName: string;
  password: string;
  accessToken: string;

  constructor(public login: LoginService, public router: Router) {}

  getLogin() {
    this.login.signIn(this.userName, this.password).subscribe( (data: any) => {
      this.accessToken = data.access_token.toString();
      localStorage.setItem('access_token', this.accessToken);
      this.router.navigate(['main']);
    });
  }
}

