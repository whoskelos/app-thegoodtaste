import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/servicios/auth-service.service';
import { Usuarios } from 'src/app/models/usuario';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.css']
})
export class GestionUsuariosComponent implements OnInit {

  //iconos
  faEdit = faEdit;
  faTrash = faTrash;

  public usuarios !: Usuarios[];


  constructor(
    public authservice: AuthServiceService,
    public route: ActivatedRoute
    ) { 
    // this.id = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.getUsuarios();
  }

  //obtengo todos los usuarios
  getUsuarios() {
    this.authservice.getUsuarios().subscribe(
      res => {
        this.usuarios = res;
      },
      err => console.log(err)
    );
  }

  eliminarUsuario(_id: String){
    this.authservice.eliminarUsuario(_id).subscribe(
      res => {
        this.getUsuarios();
      },
      err => console.log(err)
    );
  }

  registrarEmpleado(form: NgForm){ //le paso el objeto formulario
    //llamo al servicio a la funcion registrar y le paso los values del formulario
    this.authservice.registrarse(form.value).subscribe(
      res => {
        //si todo okay, llamo de nuevo a obtener usuarios para que actulice la vista y reinicio el formulario
        this.getUsuarios();
        form.reset();
      },
      err => console.log(err)
    )
  }

}
