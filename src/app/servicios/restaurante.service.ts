import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Restaurante } from '../models/restaurante';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  api = 'http://localhost:3000/api/restaurantes';

  restaurantes !: Restaurante[];

  constructor(private http: HttpClient) { }

  getRestaurantes(){
    return this.http.get<Restaurante[]>(this.api);
  }

  postRestaurante(Restaurante: Restaurante){
    return this.http.post(this.api,Restaurante);
  }

  getRestauranteById(_id: string) : Observable<any>{
    return this.http.get(this.api + `/${_id}`)
  }
  
  // putRestaurante(Restaurante: Restaurante){
  //   return this.http.put(this.api + `/${Restaurante._id}`,Restaurante);
  // }

  // deleteRestaurante(_id: string){
  //   return this.http.delete(this.api + `/${_id}`)
  // }

}
