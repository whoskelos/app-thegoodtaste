import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/models/restaurante';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RestauranteService } from 'src/app/servicios/restaurante.service';

@Component({
  selector: 'app-gestion-restaurantes',
  templateUrl: './gestion-restaurantes.component.html',
  styleUrls: ['./gestion-restaurantes.component.css']
})
export class GestionRestaurantesComponent implements OnInit {

  //iconos
  faEdit = faEdit;
  faTrash = faTrash;

  public restaurantes !: Restaurante[];

  constructor(
    public restauranteservice: RestauranteService,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getRestaurantes();
  }

  //obtengo los restaurantes
  getRestaurantes() {
    this.restauranteservice.getRestaurantes().subscribe(
      res => {
        this.restaurantes = res;
      },
      err => console.log(err)
    );
  }

  //elimino el restaurante seleccionado
  eliminarRestaurante(_id: string) {
    this.restauranteservice.deleteRestaurante(_id).subscribe(
      res => {
        this.getRestaurantes();
      },
      err => console.log(err)
    )
  }

  addRestaurante(form: NgForm) {

    if (form.value._id) {
      this.restauranteservice.putRestaurante(form.value).subscribe(
        res =>{
          console.log(res);
        },
        err => console.log(err)
      );
    } else {
      this.restauranteservice.postRestaurante(form.value).subscribe(
        res => {
          this.getRestaurantes();
          form.reset();
        },
        err => console.log(err)
      );
    }
  }


  editRestaurante(restaurante: any) {
    this.restauranteservice.restaurante = restaurante;
  }

  resetForm(form: NgForm) {
    form.reset();
  }

}
