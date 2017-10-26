import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";//Verificar dependencia
import { RoutingModule } from "./routing/routing.module";
import { HttpModule } from "@angular/http";//Verificar dependencia
import { FileUploadModule } from 'ng2-file-upload';

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
import { ArchivosJugadoresService } from "./servicios/archivos-jugadores.service";
import { JugadoresService } from "./servicios/jugadores.service";

//entidades
import { Juego } from "./entidades/juego";
import { ListadoComponent } from './listado/listado.component';
import { JugadoresComponent } from './jugadores/jugadores.component';


@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    JugadoresComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    RouterModule,
    HttpModule,
    FileUploadModule
  ],
  providers: [
    JuegoService,
    MiHttpService,
    ArchivosJugadoresService,
    JugadoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
