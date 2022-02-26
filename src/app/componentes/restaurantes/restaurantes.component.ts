import { Component, OnInit } from '@angular/core';
import { RestauranteService } from "../../servicios/restaurante.service";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { Restaurante } from 'src/app/models/restaurante';
import { Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {


  //esto son iconos del modulo font-awesome 
  faUtensils = faUtensils;
  faStore = faStore;

  public restaurantes !: Restaurante[];

  constructor(public restauranteService: RestauranteService) { }

  //estos son los pipes del componente Pipe en la ruta pipes/* estan los .ts donde estan las funciones que se encargan de realizar la busqueda 
  filterRest = '';
  filterRest2 = '';

  ngOnInit(): void {
    this.getRestaurantes();
  }


  //esta funcion llama al servicio restaurante y a la funcion que obtiene todos los restaurantes
  getRestaurantes() {
    this.restauranteService.getRestaurantes().subscribe(
      res => {
        this.restaurantes = res;
      },
      err => console.log(err)
    );
  }

  //funcion que saca filtra por los que más likes tienen de mayor a menor
  getRestaurantesPuntuacion() {
    this.restauranteService.getRestaurantes().subscribe(
      res => {
        this.restaurantes = res.sort((a, b) => b.likes - a.likes);

      },
      err => console.log(err)
    );
  }
  //funcion que saca filtra por los que más comentarios tienen de mayor a menor
  getRestaurantesComentarios() {
    this.restauranteService.getRestaurantes().subscribe(
      res => {
        this.restaurantes = res.sort((a, b) => b.comentarios.length - a.comentarios.length);
      },
      err => console.log(err)
    );
  }


}
