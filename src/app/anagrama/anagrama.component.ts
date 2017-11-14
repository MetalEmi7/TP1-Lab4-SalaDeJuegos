import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from "@angular/core";

import { Juego } from "../entidades/juego";
import { JuegoService } from "../servicios/juego.service";

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit{
  @Output()
  event_emitter :EventEmitter<Juego>;

    unJuego:Juego;

    palabra_Usuario:string="";
    palabra_Sistema:string="";
    palabra_Mezclada:string="****";

    intentos_Usuario:number=0;
    intentos_Sistema:number=5;

    puntos:number;

    private ListaDePalabras:Array<any> = new Array<any>();

    constructor(private datos:JuegoService)  {
      this.event_emitter = new EventEmitter<Juego>();

      this.unJuego = new Juego(
        localStorage.getItem("jugador"), 
        "Anagrama", 
        "Apareceran palabras con sus letras mezcladas, hay de descifrar 5 veces cual es la palabra correcta para sumar puntos", 
        "Haga click en el boton 'Juego nuevo' para comenzar.");

      //this.GenerarNum();
    }    

  generarJuego()
  { 
    this.puntos = 0;
    this.unJuego.juega = true;
    this.obtenerPalabra();
    this.unJuego.mensaje = "Escriba la palabra correcta y haga click en 'verificar' o precione la tecla 'enter'.";    
  } 


  obtenerPalabra()
  {
    if (this.unJuego.juega == true)
    {    
      this.datos.palabras()
      .then(data=>{
      
      this.ListaDePalabras = data;

      if (this.ListaDePalabras.length > 0)
      {
        this.ListaDePalabras = this.ListaDePalabras.sort(()=>{ return Math.random() - 0.5});
        this.palabra_Sistema = this.ListaDePalabras.pop().toUpperCase();

        this.mezclarLetras();
      }

      })
      .catch()
    }
  }
  
  
    mezclarLetras()
    {
      do
      {
        this.palabra_Mezclada = this.palabra_Sistema.split('').sort(function(){return 0.5 - Math.random() }).join('');
      } while (this.palabra_Mezclada == this.palabra_Sistema)

      console.log(this.palabra_Sistema);
      console.log(this.palabra_Mezclada);
    }



  verificar()
  {
    if (this.intentos_Usuario < this.intentos_Sistema && this.unJuego.juega == true)
    {
      
      if(this.palabra_Usuario.toUpperCase() == this.palabra_Sistema.toUpperCase())
      {
        this.puntos += 10;

        document.getElementById("LblMensaje").setAttribute("class", "text-white");
        this.unJuego.mensaje = "Palabra correcta, pruebe con esta otra palabra...";
      }
      else
      {
        document.getElementById("LblMensaje").setAttribute("class", "text-danger");
        this.unJuego.mensaje = "Palabra incorrecta, era: "+ this.palabra_Sistema +", pruebe con esta otra palabra...";    
           
      }
      this.intentos_Usuario++; 
      this.palabra_Usuario = "";
      if (this.intentos_Usuario < this.intentos_Sistema)
        this.obtenerPalabra();    


      console.log(this.puntos);


      if (this.intentos_Usuario >= this.intentos_Sistema)
      {this.finDelJuego();} 
    }
  }


  finDelJuego()
  {
    this.unJuego.juega = false;
    this.unJuego.puntajeTotal += this.puntos;
    localStorage.setItem("puntos", this.puntos.toString());

    

    if (this.intentos_Usuario >= 5)
      this.unJuego.mensaje = "Excelente puntuacion! sumo un total de "+ this.puntos +" Pts. ";
    else
      this.unJuego.mensaje = "Sumo un total de "+ this.puntos +" Pts. ";


      this.unJuego.mensaje += "Haga click en el boton 'Juego nuevo' para volver a comenzar.";

    this.resetVariables();
  }




  resetVariables()
  {
    this.palabra_Usuario = "";
    this.palabra_Sistema = "";
    this.palabra_Mezclada = "****";

    this.intentos_Usuario = 0;
    document.getElementById("LblMensaje").setAttribute("class", "text-white");
  }



  keyPressEnter(e)
  {
    if (e.key == "Enter")    
    {
      this.verificar();  
    }
  }




  ngOnInit()
  {}
}
