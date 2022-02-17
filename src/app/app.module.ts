import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { MainComponent } from './componentes/main/main.component';
import { HomeComponent } from './componentes/home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { RestaurantesComponent } from './componentes/restaurantes/restaurantes.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { RestauranteDetalleComponent } from './componentes/restaurante-detalle/restaurante-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    MainComponent,
    HomeComponent,
    RestaurantesComponent,
    RestauranteDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
