import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


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
               private router: Router ) { }


  registro() {
    // const { name, email, password } = this.miFormulario.value;

    // this.authService.registro( name, email, password )
    //   .subscribe( ok => {

    //     if ( ok === true ) {
    //       this.router.navigateByUrl('/dashboard');
    //     } else {
    //       Swal.fire('Error', ok, 'error');
    //     }
    //   });

  }



}
