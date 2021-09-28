import { HttpClient } from '@angular/common/http';
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

  constructor( private http:HttpClient ) { }

  onSubmit() {
    this.http.post('http://localhost:8000/api/login', this.form).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  ngOnInit(): void {
  }

}
