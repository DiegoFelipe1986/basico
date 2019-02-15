import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  points: string;
  constructor(private http: HttpClient) {}

  getEstablishments() {
    const auth = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      Authorization: auth
    });

    return this.http.get('http://localhost:3000/searchestablishments', {
      headers
    });

  }
}
