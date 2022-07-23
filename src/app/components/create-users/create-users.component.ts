import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';
import { ToastrService } from 'ngx-toastr';

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
    private toastr : ToastrService,
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
        this.router.navigate(['dashboard']).then(() => {
          this.toastr.success('Usuario Administrador creado con éxito', 'Usuario Creado');
        });
        // this.responseHandler(result);
      },
      error => {
        // this.errors = error.error.message;
        this.toastr.error(error.error.message, 'Error');
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
