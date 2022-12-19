import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {

  // Ponemos los datos correctos de la API Reqres.in para pruebas
  miFormulario: FormGroup = this.fb.group({
    email:['eve.holt@reqres.in', [ Validators.required, Validators.email ]],
    password: ['cityslicka']
  });

  constructor(  private fb: FormBuilder,
                private router: Router,
                private apiService: ApiService ){ }


  login(){
    console.log(this.miFormulario.value);
    const {email, password} = this.miFormulario.value;

    this.apiService.login( email, password )
      .subscribe( resp => {
        console.log(resp);
      });
    // this.router.navigateByUrl('/dashboard');

  }

}
