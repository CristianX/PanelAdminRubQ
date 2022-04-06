import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../shared/auth.service';
import { FormBuilder, FormGroup } from "@angular/forms";
import { TokenService } from '../../shared/token.service';
import { AuthStateService } from '../../shared/auth-state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errors = null;

  constructor( 
    public router : Router,
    public fb: FormBuilder,
    public authService: AuthService,
    private token: TokenService,
    private authState: AuthStateService,
   ) {
     this.loginForm = this.fb.group({
       name: [],
       password: []
     });
   }

   ngOnInit() {}

  onSubmit() {
    this.authService.signin(this.loginForm.value).subscribe(
      result => {
        this.responseHandler(result);
      },
      error => {
        this.errors = error.error.message;
      }, () => {
        this.authState.setAuthState(true);
        this.loginForm.reset()
        // console.log('autenticado');
        this.router.navigate(['dashboard']);
      }
    );
  }

  // Manejo de respuesta
  responseHandler(data: { access_token: string; }) {

    this.token.handleData(data.access_token);

  }

}
