import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthServiceService } from "./servicios/auth-service.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (
    private authservice:AuthServiceService,
    private router:Router
  ){}



  canActivate(): boolean{
    if (this.authservice.estaLogueado()){
      return true;
    }
  
    this.router.navigate(['/login']);
    return false;
  }
  
}
