import { forEach } from '@angular/router/src/utils/collection';
import { JugadoresService } from '../servicios/jugadores.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{
ListaDeJugadores:Array<any>;
filtro:String;

settings = {
  columns: {
    cuit: {
      title: 'Cuit'
    },
    usuario: {
      title: 'Usuario'
    },
    email: {
      title: 'Email'
    },
    puntaje: {
      title: 'Pts'
    },
    fecha: {
      title: 'Fecha jugada'
    },
    sexo: {
      title: 'Genero'
    },
    gano: {
      title: 'Resultado'
    }
  }
};

  constructor(private datos:JugadoresService)
  {
    this.traerDatos();
  }


  traerDatos()
  {

    this.datos.jugadores("usuarios.json")
    .then(data=>{
      
        this.ListaDeJugadores = data;
        console.log(this.ListaDeJugadores);
        
  })
    .catch(error=> console.log(error))
  }


  filtrarGanadores(item)
  {
    return item.gano;
  }


  traerDatosGanadores()
  {
    this.ListaDeJugadores = [];
    var AUX_lista:Array<any> = new Array();

    this.datos.jugadores("usuarios.json")
    .then(data=>{

      this.ListaDeJugadores = data.filter(this.filtrarGanadores);

/*
      for (let dato of data)
      {
        if (dato.gano == true)
          this.ListaDeJugadores.push(dato);
      }
      */
        
        console.log(this.ListaDeJugadores);
    })
    .catch(error=> console.log(error))
  }




  traerDatosPerdedores()
  {
    this.ListaDeJugadores = [];
    
        this.datos.jugadores("usuarios.json")
        .then(data=>{
    
          for (let dato of data)
          {
            if (dato.gano == false)
              this.ListaDeJugadores.push(dato);
          }
    
            console.log(this.ListaDeJugadores);
        })
        .catch(error=> console.log(error))
  }




}
