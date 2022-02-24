import { Component, OnInit } from '@angular/core';
import { RestauranteService } from "../../servicios/restaurante.service";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { Restaurante } from 'src/app/models/restaurante';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {

  faUtensils = faUtensils;
  faStore = faStore;

  public restaurantes !: Restaurante[];
  public restaurantesFiltrados !: Restaurante[];

  constructor(public restauranteService: RestauranteService) { }

  ngOnInit(): void {
    this.getRestaurantes();
  }


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
        console.log(res.sort((a,b)=>b.likes - a.likes));
        
      },
      err => console.log(err)
    );
  }
//funcion que saca filtra por los que más comentarios tienen de mayor a menor
  getRestaurantesComentarios(){
    this.restauranteService.getRestaurantes().subscribe(
      res => {
        console.log(res.sort((a,b)=> b.comentarios.length - a.comentarios.length));
      },
      err => console.log(err)
    );
  }


}
