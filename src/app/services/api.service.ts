import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';

import { Datos, LoginInterface, Usuario, Usuario2 } from '../interfaces/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl: string = 'https://reqres.in/api';

  constructor( private http: HttpClient ) { }

  // OBTENER TODOS LOS USUARIOS
  obtenerUsuarios(): Observable<Usuario> {
    const url = `${this.apiUrl}/users`;

    // Devolver Array de usuarios mediante la peticion http de angular
    return this.http.get<Usuario>(url);
  }

  // OBTENER UN USUARIO CON ID
  obtenerUsuarioConId( id: any ): Observable<Usuario2> {
    const url = `${this.apiUrl}/users/${id}`;

    return this.http.get<Usuario2>(url);
  }

  // ELIMINAR
  eliminar( id: any ) {
    const url = `${this.apiUrl}/users/${id}`;

    return this.http.delete(url);
  }

  // LOGIN
  login( email: string, password: string ) {
    const url = `${this.apiUrl}/login`;
    const body = { email, password }

    return this.http.post<LoginInterface>(url, body)
      .pipe(
        tap( resp => {
          if (resp) {
            localStorage.setItem('token', resp.token)
          }
        }),
        catchError( err => of(err.error.msg ) )
      )
  }

  // REGISTRO
  register( email: string, password: string ) {
    const url = `${this.apiUrl}/register`;
    const body = { email, password }

    return this.http.post<LoginInterface>(url, body)
      .pipe(
        tap( resp => {
          if (resp.token) {
            localStorage.setItem('token', resp.token)
          }
        }),
        catchError( err => of(err.error.msg ) )
      )
  }

}
