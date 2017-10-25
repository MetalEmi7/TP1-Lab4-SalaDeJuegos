import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";         //Verificar dependencia

//Router
import { RouterModule, Routes, RouterLinkActive} from '@angular/router';

//Componente
import { MainMenuComponent } from '../main-menu/main-menu.component';
import { LoginComponent } from '../login/login.component';
import { RegistroComponent } from '../registro/registro.component';
import { AdivinaElNumeroComponent } from '../adivina-el-numero/adivina-el-numero.component';
import { AgilidadComponent } from '../agilidad/agilidad.component';
import { JuegoDeColoresComponent } from '../juego-de-colores/juego-de-colores.component';
import { ErrorComponent } from '../error/error.component';
import { SalaDeJuegosComponent } from '../sala-de-juegos/sala-de-juegos.component';
import { PiedraPapelTijeraComponent } from '../piedra-papel-tijera/piedra-papel-tijera.component';

//Servicios
import { JuegoService } from "../servicios/juego.service";
import { MiHttpService } from "../servicios/mi-http.service";

//Entidades

const miRuteo = [
{path: "",component: MainMenuComponent},
{path: "registro",component: RegistroComponent},
{path: "salaDeJuegos",component: SalaDeJuegosComponent,
  children: [
    {path: "login",component: LoginComponent},
    {path: "adivina",component: AdivinaElNumeroComponent},
    {path: "piedraPapelTijera",component: PiedraPapelTijeraComponent},
    {path: "agilidad",component: AgilidadComponent},
    {path: "juego de colores",component: JuegoDeColoresComponent}
  ]},
{path: "**",component: ErrorComponent}
]

@NgModule({
  declarations: [
    MainMenuComponent,
    LoginComponent,
    RegistroComponent,
    AdivinaElNumeroComponent,
    AgilidadComponent,
    JuegoDeColoresComponent,
    ErrorComponent,
    SalaDeJuegosComponent,
    PiedraPapelTijeraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(miRuteo)
  ],
})
export class RoutingModule { }
