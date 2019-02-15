import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) {
  }


  signIn(userName: string, password: string) {
    const body = {
      userName,
      password
    };

    const toReq = this.http.post('http://localhost:3000/login', body);

    return toReq;
  }

  getAccount() {
    const auth = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      Authorization: auth
    });
    return this.http.get('http://localhost:3000/aboutme', { headers });
  }



}
