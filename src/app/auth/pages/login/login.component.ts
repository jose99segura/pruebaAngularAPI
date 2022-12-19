import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {

  miFormulario: FormGroup = this.fb.group({
    email:['eve.holt@reqres.in', [ Validators.required, Validators.email ]],
    password: ['cityslicka']
  });

  constructor( private fb: FormBuilder ){ }


  login(){
    console.log(this.miFormulario.value);

  }

}
