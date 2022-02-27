import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurante } from 'src/app/models/restaurante';
import { RestauranteService } from 'src/app/servicios/restaurante.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-editar-restaurante',
  templateUrl: './editar-restaurante.component.html',
  styleUrls: ['./editar-restaurante.component.css']
})
export class EditarRestauranteComponent implements OnInit {

  public id!: string;
  
  constructor(
    public restauranteservice:RestauranteService,
    private route:ActivatedRoute
  ) { 
    this.id = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
  }

  editarRestaurante(form: NgForm){
    this.restauranteservice.putRestaurante(form.value)
  }

}
