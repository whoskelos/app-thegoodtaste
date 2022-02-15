import { Component, OnInit } from '@angular/core';
import { RestauranteService } from "../../servicios/restaurante.service";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {
  
  faUtensils = faUtensils;
  faStore = faStore;

  constructor(public restauranteService: RestauranteService) { }

  ngOnInit(): void {
    this.getRestaurantes();
  }
  
  
  getRestaurantes(){
    this.restauranteService.getRestaurantes().subscribe(
      res => {
        this.restauranteService.restaurantes = res;
      },
      err => console.log(err)
    );   
  }

}
