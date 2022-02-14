import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Restaurante } from '../models/restaurante';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  selectedRestaurante!: Restaurante;
  restaurantes!:Restaurante[];
  readonly api = 'http://localhost:3000/api/restaurantes';

  constructor(private http: HttpClient) { }

  getRestaurantes(){
    return this.http.get(this.api)
    .subscribe();
  }

  postRestaurante(Restaurante: Restaurante){
    return this.http.post(this.api,Restaurante);
  }

  putRestaurante(Restaurante: Restaurante){
    return this.http.put(this.api + `/${Restaurante._id}`,Restaurante);
  }

  deleteRestaurante(_id: string){
    return this.http.delete(this.api + `/${_id}`)
  }
}
