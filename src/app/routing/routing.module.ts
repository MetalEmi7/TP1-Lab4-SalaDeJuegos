import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";         
import { FileUploadModule } from 'ng2-file-upload';
import { Ng2SmartTableModule } from 'ng2-smart-table';

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
import { AnagramaComponent } from '../anagrama/anagrama.component';
import { QuienSoyComponent } from '../quien-soy/quien-soy.component';
import { MenuStripComponent } from '../menu-strip/menu-strip.component';
import { ListadoComponent } from '../listado/listado.component';

//Servicios
import { JuegoService } from "../servicios/juego.service";
import { MiHttpService } from "../servicios/mi-http.service";

//Entidades

const miRuteo = [
{path: "",component: MainMenuComponent},
{path: "salaDeJuegos",component: SalaDeJuegosComponent},
{path: "listado",component: ListadoComponent},
{path: "anagrama",component: AnagramaComponent},
{path: "adivina",component: AdivinaElNumeroComponent},
{path: "agilidad",component: AgilidadComponent},
{path: "piedraPapelTijera",component: PiedraPapelTijeraComponent},
{path: "juego de colores",component: JuegoDeColoresComponent},
{path: "quienSoy",component: QuienSoyComponent},
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
    PiedraPapelTijeraComponent,
    AnagramaComponent,
    QuienSoyComponent,    
    MenuStripComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(miRuteo),
    FileUploadModule,
    Ng2SmartTableModule
  ],
})
export class RoutingModule { }
