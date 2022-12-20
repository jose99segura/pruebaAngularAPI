import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Datos, Usuario } from 'src/app/interfaces/Usuario';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //Atributos
  usuarios: Datos[] = [];

  ngOnInit(){
    this.obtenerUsuarios();
  }

  constructor( private apiService: ApiService,
                private router: Router ){ }

  obtenerUsuarios(){

    this.apiService.obtenerUsuarios()
    // Desestructuracion de 'usuarios'
      .subscribe( ({data}) => {
        this.usuarios = data;
        // console.log(this.usuarios);

      }, (err) => {
        this.usuarios = [];
      });

  }

  detalle(usuario: Datos) {
    this.router.navigate(['/protected/detalle',usuario.id]);
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/auth');
  }

}
