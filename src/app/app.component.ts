import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app';
  nombre: string = 'Carlos'
  edad: number = 21
  telefono: null = null
  direccion: undefined = undefined
  otros: any;
  /*
  car: CarModel = {
    marca: 'Ford',
    modelo: 'Focus',
    ano: 2022
  }
  

  listaCar: Array<CarModel> = [{
    marca: 'Nisan',
    modelo: 'Salon',
    ano: 2020
  },{
    marca: 'Toyota',
    modelo: 'Silver 2000',
    ano: 2021
  }
]*/
}

/*
interface CarModel {
  marca: string;
  modelo: string;
  ano?: number;
}*/
