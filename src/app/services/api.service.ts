import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { LoginInterface, Usuario } from '../interfaces/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl: string = 'https://reqres.in/api';
  private _usuario!: Usuario;

  constructor( private http: HttpClient ) { }

  obtenerUsuarios(): Observable<Usuario> {
    const url = `${this.apiUrl}/users`;

    // Devolver Array de usuarios mediante la peticion http de angular
    return this.http.get<Usuario>(url);
  }

  login( email: string, password: string ) {
    const url = `${this.apiUrl}/login`;
    const body = { email, password }

    return this.http.post<LoginInterface>(url, body)
      .pipe(
        tap( resp => {
          localStorage.setItem('token', resp.token)
        })
      )
  }

}
