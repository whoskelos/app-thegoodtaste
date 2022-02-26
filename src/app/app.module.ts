import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RestaurantesComponent } from './componentes/restaurantes/restaurantes.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { RestauranteDetalleComponent } from './componentes/restaurante-detalle/restaurante-detalle.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { FavoritosComponent } from './componentes/favoritos/favoritos.component';
import { FormsModule } from '@angular/forms';

import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from "./servicios/token-interceptor.service";
import { PanelAdminComponent } from './componentes/panel-admin/panel-admin.component';
import { FilterPipe } from './pipes/filter.pipe';
import { Filter2Pipe } from './pipes/filter2.pipe';
import { GestionUsuariosComponent } from './componentes/gestion-usuarios/gestion-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    RestaurantesComponent,
    RestauranteDetalleComponent,
    LoginComponent,
    RegistroComponent,
    FavoritosComponent,
    PanelAdminComponent,
    FilterPipe,
    Filter2Pipe,
    GestionUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
