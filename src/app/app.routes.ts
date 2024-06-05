import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';


export const routes: Routes = [
    {
        /*Agregamos el componente que son capaces de destruir todos los componentes en el archivo principal
        de rutas, destruyen modulos como el sidebar y mediaplayer */
        path:'auth',//Todo:localhost:4200/",
        loadChildren:() => import('./modules/auth/auth.module').then(m => m.AuthModule)
    },{

        path:'',
        component:HomePageComponent, //Agregamos el componente Home
        loadChildren:() => import('./modules/home/home.module').then(m => m.HomeModule)
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}
