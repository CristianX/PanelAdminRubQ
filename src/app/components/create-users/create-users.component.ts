import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {

  createForm: FormGroup;
  errors = null;

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService : AuthService,
  ) {
   this.createForm = this.fb.group({
     name: [],
     email: [],
     password: []
   });
  }

  ngOnInit() {}

  onSubmit() {
    this.authService.postCrearUsuarioAdmin(this.createForm.value).subscribe(
      result => {
        this.router.navigate(['dashboard']);
        // this.responseHandler(result);
      },
      error => {
        console.log("Error:");
        this.errors = error.error.message;
      },
    );
  }

  // Manejo de respuesta
  // responseHandler(data: { access_token: string; }) {

  //   // this.token.handleData(data.access_token);

  // }

  goDashboard() {
    this.router.navigate(['dashboard']);
  }

}
