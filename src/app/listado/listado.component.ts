import { JugadoresService } from '../servicios/jugadores.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  ListaDeJugadores:Array<any>;
  filtro:String;

  constructor(public datos:JugadoresService){
    this.ListaDeJugadores = new Array<any>();

    this.traerDatos("algo");
  }



  traerDatos(archivo)
  {
    this.datos.jugadores(archivo, "todos")
    .then(data=>{

      this.ListaDeJugadores = data;

    })
    .catch(error=> console.log(error))
  }





  ngOnInit() {
  }

}
