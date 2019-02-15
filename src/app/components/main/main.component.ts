import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  nameAuth: string;
  lastNameAuth: string;
  country: string;

  constructor( public login: LoginService ) {
  }

  ngOnInit() {
    this.login.getAccount().subscribe( (data: any) => {
      this.nameAuth = data.name;
      this.lastNameAuth = data.lastName;
      this.country = data.country.id;
      localStorage.setItem('name', this.nameAuth);
      localStorage.setItem('lastName', this.lastNameAuth);
      localStorage.setItem('country_id', this.country);
      document.getElementById('result').innerHTML = localStorage.getItem('lastName');
    });
  }

  getSearch() {
    console.log('hola');
  }



}
