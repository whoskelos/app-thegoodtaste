import { Component, OnInit } from '@angular/core';
import { RestauranteService } from 'src/app/servicios/restaurante.service';
import { Restaurante } from 'src/app/models/restaurante';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  topRestaurantes!: Restaurante[];

  constructor(private restauranteservice:RestauranteService) { }

  ngOnInit(): void {
    this.getTopRestaurantes();
  }

  getTopRestaurantes(){
    this.restauranteservice.getRestaurantes().subscribe(
      res =>{
        this.topRestaurantes = res.sort((a,b)=>b.likes - a.likes).slice(0,3);
      },
      err => console.log(err)
    );
  }
}
