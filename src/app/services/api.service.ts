import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/Usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl: string = 'https://reqres.in/api';

  constructor( private http: HttpClient ) { }

  obtenerUsuarios(): Observable<Usuario>{
    const url = `${this.apiUrl}/users`;
    // Devolver Array de usuarios mediante la peticion http de angular
    return this.http.get<Usuario>(url);
  }

}
