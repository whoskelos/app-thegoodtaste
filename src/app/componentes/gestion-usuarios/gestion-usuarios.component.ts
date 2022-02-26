import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/servicios/auth-service.service';
import { Usuarios } from 'src/app/models/usuario';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

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
  mostrarFormulario!:Boolean;


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
        console.log(this.usuarios);
      },
      err => console.log(err)
    );
  }

  eliminarUsuario(_id: String){
    this.authservice.eliminarUsuario(_id).subscribe(
      res => {
        console.log("usuario eliminado");
        this.getUsuarios();
      },
      err => console.log(err)
    );
  }

  mostrarForm():void{
    this.mostrarFormulario = true;
  }

}
