import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-page',
  standalone: false,
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export class AuthPageComponent implements OnInit{

  //? (3) los servicios se inyectan por el constructor
  constructor(private authService: AuthService){

  }

  //? (1) declaramos

  formLogin: FormGroup = new FormGroup({});

  ngOnInit(): void {
      this.formLogin = new FormGroup({
        email: new FormControl('',[
          //? (2) Agregamos las validaciones para ambos controles
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('',[
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ])
      })
  }

  //? (3) establecemos la funcion que captura los datos
  sendLogin(): void {
    const {email,password} = this.formLogin.value
    this.authService.sednCredentials(email,password)

    //? (3) luego pasamos los valores al formulario

    //?(4) actualizamos el metodo con el service, para pasar datos del component al service
  }

  //? (1) una vez definidos lo usamos en el html (en el tag form e input)

}
