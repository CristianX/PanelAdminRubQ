import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// User interface
export class User {
  name: String | undefined;
  email: String | undefined;
  password: String | undefined;
  password_confirmation: String | undefined
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  // User registration
  // register(user: User): Observable<any> {
  //   return this.http.post('http://127.0.0.1:8000/api/auth/register', user);
  // }

  // Login
  signin(user: User): Observable<any> {
    return this.http.post<any>('http://localhost:8000/api/login', user);
  }

  // Poner dashboard
  // profileUser(): Observable<any> {
  //   return this.http.get('http://127.0.0.1:8000/api/auth/user-profile');
  // }

  // Lista de Usuarios
  listUsers() : Observable<any> {
    return this.http.get('http://localhost:8000/api/usuarios');
  }

  listBicicletas() : Observable<any> {
    return this.http.get('http://localhost:8000/api/bicicletas');
  }

  getBicicleta(id: number) : Observable<any> {
    return this.http.get('http://localhost:8000/api/bicicleta/' + id);
  }

  getBicicletasEliminadas() : Observable<any> {
    return this.http.get('http://localhost:8000/api/bicicletasEliminadas');
  }

  putRestaurarBicicletaEliminada(id: number) : Observable<any> {
    return this.http.put('http://localhost:8000/api/bicicletaRestaurar/' + id, '');
  }

  postCrearUsuarioAdmin(user: User): Observable<any> {
    return this.http.post<any>('http://localhost:8000/api/register', user);
  }

}