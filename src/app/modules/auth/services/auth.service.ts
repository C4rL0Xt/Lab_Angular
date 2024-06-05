import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  //definimos un metodo
  sednCredentials(email: string, password: string): void {

  }

  //? luego vamos al componente donde queremos inyectar este metodo (auth.compo.ts)
}
