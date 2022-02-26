import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/servicios/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user = {
    email : "",
    password : "",
    admin : true,
    favoritos : []
  };

  constructor(
    private authservice: AuthServiceService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  registrarse(){
    this.authservice.registrarse(this.user)
    .subscribe(
      res => {
        localStorage.setItem("token",res.token);
        this.router.navigate(['/favoritos']);
      },
      err=> console.log(err)
    );
  }
}
