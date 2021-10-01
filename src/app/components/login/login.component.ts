import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    user: null,

    password: null
  }

  public error = null;

  constructor( private http:HttpClient ) { }

  onSubmit() {
    try {
      this.http.post('http://localhost:8000/api/login', this.form, { headers: {
        'Content-Type':  "application/json",
      }}).subscribe(
        data => console.log(data),
        error => this.handleError(error),
      ); 
    } catch (error) {
      
    }
  }

  handleError(error: { error: { error: null; }; }) {

    this.error =  error.error.error;

  }

  ngOnInit(): void {
  }

}
