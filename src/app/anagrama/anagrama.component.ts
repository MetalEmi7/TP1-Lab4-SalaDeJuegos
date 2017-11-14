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
    intentos:any=3;

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
        "Haga click en el boton 'iniciar' para comenzar el juego");

      //this.GenerarNum();
    }    

  generarJuego()
  { 
    this.puntos=0;
    this.unJuego.juega = true;
    this.obtenerPalabra();
  } 


  obtenerPalabra()
  {
    if (this.unJuego.juega == true)
    {    
      this.datos.palabras()
      .then(data=>{

      this.unJuego.mensaje = "Escriba la palabra correcta y haga click en 'verificar' o precione la tecla 'enter'.";    
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

        this.obtenerPalabra();       
        this.intentos_Usuario++; 
      }
      else
      {

        this.obtenerPalabra();       
        this.intentos_Usuario++;        
      }


      if (this.intentos_Usuario >= this.intentos_Sistema)
      {
          this.finDelJuego();
      } 
    }

    console.log(this.puntos);
  }

  resetControls()
  {
    this.palabra_Usuario = "";
    this.palabra_Sistema = "";
    this.palabra_Mezclada = "****";
    
    this.unJuego.mensaje = "Sumo un total de "+ this.puntos +" Pts.";
    this.puntos = 0;
  }




finDelJuego()
{
  this.unJuego.juega = false;
  this.unJuego.puntajeTotal += this.puntos;

  localStorage.setItem("puntos", this.puntos.toString());
  this.resetControls();
}







  ngOnInit()
  {}
}
