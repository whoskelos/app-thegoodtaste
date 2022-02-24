import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/servicios/auth-service.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: "",
    password: ""
  }

  constructor(
    private authservice: AuthServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  iniciarSesion() {
    this.authservice.iniciarSesion(this.user)
      .subscribe(
        res => {
          if (res.status == "admin") {
            localStorage.setItem("admin",res.status);
            this.router.navigate(['/panelAdmin']);
          }
          if (res.token) {
            localStorage.setItem("token", res.token)
            this.router.navigate(['/favoritos'])
            console.log(res.token);

          }
        },
        err => console.log(err)
      );
  }

}
