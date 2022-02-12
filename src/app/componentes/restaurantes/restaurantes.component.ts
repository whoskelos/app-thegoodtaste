import { Component, OnInit } from '@angular/core';
import { Restaurante } from "../../models/restaurante";

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {

  restaurantes: Restaurante[] = []; //declaramos array vacio de la clase restaurante.ts

  constructor() { }

  ngOnInit(): void {
    this.restaurantes = [
      {
        id: 0,
        nombre: 'Bálamo',
        tipo: 'Mediterraneo',
        ubicacion: 'Alcorcón',
        likes: 30,
        comentarios: ['Una pasada de sitio','Lo recomiendo'],
        foto: ''
      },
      {
        id: 0,
        nombre: 'El Botánico',
        tipo: 'Mediterraneo',
        ubicacion: 'Fuenlabrada',
        likes: 15,
        comentarios: ['lugar muy agradable','la paella buenísima'],
        foto: ''
      }
    ];
}

}
