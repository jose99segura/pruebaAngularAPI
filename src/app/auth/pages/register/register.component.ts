import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent {

  miFormulario: FormGroup = this.fb.group({
    email:    ['eve.holt@reqres.in', [ Validators.required, Validators.email ]],
    password: ['pistol', [ Validators.required, Validators.minLength(6) ]],
  });

  constructor( private fb: FormBuilder,
               private router: Router,
               private apiService: ApiService ) { }


  registro() {
    const {email, password} = this.miFormulario.value;

    this.apiService.login( email, password )
      .subscribe( resp => {
        console.log(resp);

        // Si la respuesta ha devuelto un token, redireccionar a dashboard
        if (resp) {
          this.router.navigateByUrl('/dashboard');
        }else{

          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El registro es incorrecto',
          })
        }
      });

  }



}
