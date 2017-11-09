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

//Config Smart_TAble
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
    this.datos.jugadores("usuarios.json")
    .then(data=>{
      this.ListaDeJugadores = data;
    })
    .catch(error=> console.log(error))
  }








  
  private filtrar_Ganadores(item)
  {return item.email=="hbelchem2@nytimes.com";}

  private filtrar_Perdedores(item)
  {return !item.gano;}


  


  filtrar(ctrl)
  {
    //console.log(ctrl);
    this.ListaDeJugadores = [];

    switch (ctrl.target.value)
    {
      case "Ganadores":
        this.datos.jugadores("usuarios.json")
        .then(data=>{

          this.ListaDeJugadores = data.filter(this.filtrar_Ganadores);
          console.log(this.ListaDeJugadores);
        })
        .catch(error=> console.log(error))   

      break;


      case "Perdedores":
        this.datos.jugadores("usuarios.json")
        .then(data=>{

          this.ListaDeJugadores = data.filter(this.filtrar_Perdedores);
          console.log(this.ListaDeJugadores);
        })
        .catch(error=> console.log(error))      
      break;


      case "Todos":
        this.datos.jugadores("usuarios.json")
        .then(data=>{

            this.ListaDeJugadores = data;
            console.log(this.ListaDeJugadores);
        })
        .catch(error=> console.log(error))  
      break;
    }
  }


}
