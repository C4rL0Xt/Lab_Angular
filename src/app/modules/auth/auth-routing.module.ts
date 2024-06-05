import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';

const routes: Routes = [
  {
    //Establecemos ruta para Auth
    path:'login',  //?  http://localhost:4200/auth/login
    component:AuthPageComponent
  },{
    path: '**', //? (Paso 1) Esto indica una ruta que no existe, si la ruta no existe lo redirige al login
    redirectTo: '/auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
