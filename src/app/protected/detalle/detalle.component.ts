import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Datos, Usuario2 } from 'src/app/interfaces/Usuario';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  public id: any;
  user: Datos = {
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
    avatar: ''
  };

  constructor(private router: ActivatedRoute,
              private route: Router,
              private apiService: ApiService) {
              }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('id');
    this.obtenerUsuarioConId(this.id);
  }

  obtenerUsuarioConId(id: any) {
    this.apiService.obtenerUsuarioConId(id)
      .subscribe( (resp) => {
        this.user = resp.data;


      }, (err) => {
        console.error("no se puede obtener con id", err);
        this.user = {
          id: 0,
          email: '',
          first_name: '',
          last_name: '',
          avatar: ''
        };
      });
  }

  eliminar(){
    this.apiService.eliminar(this.id)
    .subscribe( (resp) => {

      Swal.fire({
        icon: 'success',
        title: 'Eliminado',
        text: 'El usuario ha sido eliminado correctamente',
      })
        this.route.navigateByUrl('/protected/dashboard');

    }, (err) => {
      console.error("no se puede borrar", err);
    });
  }

  back(){
    this.route.navigateByUrl('/protected/dashboard');
  }

}
