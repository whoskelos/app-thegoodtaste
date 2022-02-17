import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestauranteService } from 'src/app/servicios/restaurante.service';
@Component({
  selector: 'app-restaurante-detalle',
  templateUrl: './restaurante-detalle.component.html',
  styleUrls: ['./restaurante-detalle.component.css']
})
export class RestauranteDetalleComponent implements OnInit {

  public id!: string;

  constructor(
    private route: ActivatedRoute,
    public restauranteService: RestauranteService
  ) {
    this.id = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.getRestaurante(this.id);
  }

  getRestaurante(_id: string) {
    this.restauranteService.getRestaurante(_id).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    );
  }

}
