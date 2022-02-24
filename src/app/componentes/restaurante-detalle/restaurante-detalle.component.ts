import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurante } from 'src/app/models/restaurante';
import { RestauranteService } from 'src/app/servicios/restaurante.service';
import { AuthServiceService } from 'src/app/servicios/auth-service.service';
@Component({
  selector: 'app-restaurante-detalle',
  templateUrl: './restaurante-detalle.component.html',
  styleUrls: ['./restaurante-detalle.component.css']
})
export class RestauranteDetalleComponent implements OnInit {

  public id!: string;
  public resSelected !: Restaurante

  constructor(
    private route: ActivatedRoute,
    public restauranteService: RestauranteService,
    public authservice:AuthServiceService
  ) {
    this.id = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.getRestauranteById();
  }

  getRestauranteById() {
    this.restauranteService.getRestauranteById(this.id).subscribe(
      res => {
        this.resSelected = res
      },
      err => console.log(err)
    );
  }

  marcarFavorito(){
    console.log(this.id);
  }


}
