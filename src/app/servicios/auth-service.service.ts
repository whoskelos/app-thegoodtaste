import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { Usuarios } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  api = "api/users";

  public user: Usuarios = {
    _id: "",
    email: "",
    password: "",
    favoritos: []
  };

  constructor(
    private http:HttpClient,
    private router:Router
    ) { }

  registrarse(user : any){
    return this.http.post<any>(this.api + '/signup', user);
  }

  iniciarSesion(user : any){
    return this.http.post<any>(this.api + '/signin', user);
  }

  estaLogueado(){
    return !!localStorage.getItem("user");
  }

  getToken(){
    return localStorage.getItem("token");
  }

  getUsuarios(){
    return this.http.get<Usuarios[]>(this.api);
  }
  
  eliminarUsuario(_id: String) : Observable<any> {
    return this.http.delete(this.api + `/${_id}`);
  }

  logout(){
    localStorage.removeItem("user");
    this.router.navigate(['/login']);
  }
}
