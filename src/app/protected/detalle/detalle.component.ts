import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Datos } from 'src/app/interfaces/Usuario';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  usuario: Datos[] | undefined;
  public id: any;

  user: any;

  constructor(private router: ActivatedRoute,
              private route: Router,
              private apiService: ApiService) {}

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('id');
    this.obtenerUsuarioConId(this.id);
  }

  obtenerUsuarioConId(id: any) {
    this.apiService.obtenerUsuarioConId(id)
      .subscribe( (resp) => {
        this.usuario = resp.data;
        this.user = resp.data;

      }, (err) => {
        console.error("no se puede obtener con id", err);
        this.usuario = [];
        this.user = null;
      });
  }

  eliminar(){
    this.apiService.eliminar(this.id)
    .subscribe( (resp) => {

      console.log(resp);

      if (resp) {
        this.route.navigateByUrl('/protected/dashboard');
      }

    }, (err) => {
      console.error("no se puede borrar", err);
    });
  }

  back(){
    this.route.navigateByUrl('/protected/dashboard');
  }

}
