import { Component, OnInit } from '@angular/core';
import { Datos } from 'src/app/interfaces/Usuario';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //Atributos
  private usuarios: Datos[] = [];

  ngOnInit(){
    this.obtenerUsuarios();
  }

  constructor( private apiService: ApiService ){ }

  obtenerUsuarios(){

    this.apiService.obtenerUsuarios()
    // Desestructuracion de 'usuarios'
      .subscribe( ({data}) => {
        this.usuarios = data;
        console.log(this.usuarios);

      }, (err) => {
        this.usuarios = [];
      });

  }

}
