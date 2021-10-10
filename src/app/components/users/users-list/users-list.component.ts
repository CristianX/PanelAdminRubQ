import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '../../../shared/auth.service';

// Interface de listar usuario
export class Users {
  IDENTIFICACION_USUARIO: String | undefined;
  NOMBRES_USUARIO: String | undefined;
  APELLIDOS_USUARIO: String | undefined;
  EDAD_USUARIO: Number | undefined;
  FECHANACIMIENTO_USUARIO: Date | undefined;
  EMAIL_USUARIO: String | undefined;
  TELFCONVENCIONAL_USUARIO: String | undefined;
  TELFCELULAR_USUARIO: String | undefined;
  NACIONALIDAD_USUARIO: String | undefined;
  PARROQUIARES_USUARIO: String | undefined;
  BARRIORES_USUARIO: String | undefined;
}


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  DataUsers: Users[] | undefined;
  errors: null | undefined;

  constructor( 
    public authService: AuthService
   ) {
     this.authService.listUsers().subscribe((data:any) => {
       this.DataUsers = data;
     },
     error => {
       this.errors = error.error.error;
     }
     )
   }

  ngOnInit(): void {
  }

}
