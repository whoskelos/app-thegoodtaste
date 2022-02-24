import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantesComponent } from "./componentes/restaurantes/restaurantes.component";
import { HomeComponent } from './componentes/home/home.component';
import { RestauranteDetalleComponent } from "./componentes/restaurante-detalle/restaurante-detalle.component";
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { FavoritosComponent } from './componentes/favoritos/favoritos.component';

import { AuthGuard } from './auth.guard';
import { PanelAdminComponent } from './componentes/panel-admin/panel-admin.component';

const routes: Routes = [
  {path: '',pathMatch:'full', redirectTo:'/home'},
  {path:'home', component:HomeComponent},
  {path:'restaurantes', component:RestaurantesComponent},
  {path:'login', component:LoginComponent},
  {path:'restaurantes/:id', component:RestauranteDetalleComponent},
  {path:'registro', component:RegistroComponent},
  {path:'favoritos', component:FavoritosComponent, canActivate:[AuthGuard]},
  {path:'panelAdmin', component:PanelAdminComponent},
  {path: '**',pathMatch: 'full',redirectTo:'/home'}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
