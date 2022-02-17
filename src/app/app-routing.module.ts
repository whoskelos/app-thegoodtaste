import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantesComponent } from "./componentes/restaurantes/restaurantes.component";
import { HomeComponent } from './componentes/home/home.component';
import { RestauranteDetalleComponent } from "./componentes/restaurante-detalle/restaurante-detalle.component";
const routes: Routes = [
  {path: '',pathMatch:'full', redirectTo:'/home'},
  {path:'home', component:HomeComponent},
  {path:'restaurantes', component:RestaurantesComponent},
  {path:'restaurantes/:id', component:RestauranteDetalleComponent},
  {path: '**',pathMatch: 'full',redirectTo:'/home'}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
