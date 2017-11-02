import { JugadoresService } from '../servicios/jugadores.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

  ListaDeJugadores:any;
  filtro:String;

  constructor(private datos:JugadoresService)
  {this.traerDatos();}


  traerDatos()
  {
    this.datos.jugadores("usuarios.json")
    .then(data=>{

        this.ListaDeJugadores = data;
        console.log(this.ListaDeJugadores);
  })
    .catch(error=> console.log(error))
  }

  




}
