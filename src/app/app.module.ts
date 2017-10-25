import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";//Verificar dependencia
import { RoutingModule } from "./routing/routing.module";
import { HttpModule } from "@angular/http";//Verificar dependencia

//Router
import { RouterModule, Routes , RouterLinkActive} from '@angular/router';//Verificar dependencia

//Componente            //Verificar dependencia
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AdivinaElNumeroComponent } from './adivina-el-numero/adivina-el-numero.component';
import { AgilidadComponent } from './agilidad/agilidad.component';
import { JuegoDeColoresComponent } from './juego-de-colores/juego-de-colores.component';
import { ErrorComponent } from './error/error.component';
import { SalaDeJuegosComponent } from './sala-de-juegos/sala-de-juegos.component';
import { PiedraPapelTijeraComponent } from './piedra-papel-tijera/piedra-papel-tijera.component';

//Servicios                 //Verificar dependencia
import { JuegoService } from "./servicios/juego.service";
import { MiHttpService } from "./servicios/mi-http.service";

//entidades
import { Juego } from "./entidades/juego";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    RouterModule,
    HttpModule
  ],
  providers: [
    JuegoService,
    MiHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
