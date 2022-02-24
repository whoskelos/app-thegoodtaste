import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  url = "http://localhost:3000/api/users";

  constructor(
    private http:HttpClient,
    private router:Router
    ) { }

  registrarse(user : any){
    return this.http.post<any>(this.url + '/signup', user);
  }

  iniciarSesion(user : any){
    return this.http.post<any>(this.url + '/signin', user);
  }

  estaLogueado(){
    return !!localStorage.getItem("token");
  }

  esAdmin(){
    return !!localStorage.getItem("admin");
  }

  getToken(){
    return localStorage.getItem("token");
  }

  logout(){
    localStorage.removeItem("token");
    this.router.navigate(['/login']);
  }
}
