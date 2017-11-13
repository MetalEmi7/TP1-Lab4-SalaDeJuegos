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
  
    constructor(private datos:JuegoService)  {
      this.event_emitter = new EventEmitter<Juego>();

      this.unJuego = new Juego(
        localStorage.getItem("jugador"), 
        "Anagrama", 
        "Apareceran palabras con sus letras mezcladas, hay de descifrar cual es la palabra correcta para sumar puntos", 
        "Haga click en el boton 'iniciar' para comenzar el juego");

      //this.GenerarNum();
    }

    

  GenerarNum(){
    
  }
  


  Adivinar(){
  }


  



  ngOnInit()
  {}
}
