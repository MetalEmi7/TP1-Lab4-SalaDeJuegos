import { Component, OnInit } from '@angular/core';

import { Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

import { Juego } from "../entidades/juego";

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent{
  @Output()
  event_emitter :EventEmitter<Juego>;
  unJuego:Juego;  

  jugadaUsuario:string;
  jugadaSistema:string;

  aux_jugadaSistema:number;

  Modo_Testeo = true;

  //intentos:any=3;



  constructor()  {
    this.event_emitter = new EventEmitter<Juego>();
    this.unJuego = new Juego(
      localStorage.getItem("jugador"), 
      "Piedra, Pepel o Tijera", 
      "Debe elegir piedra papel o tijera y ganarle al sistema.", 
      "Esperando...");

    this.prepararJuego();
  }



  prepararJuego()
  {
    this.unJuego.juega=true;
    this.generarJugada();
  }



  generarJugada()
  {
    this.aux_jugadaSistema = Math.floor(Math.random() * (1 - 3));
    console.log(this.aux_jugadaSistema);

    switch (this.aux_jugadaSistema)
    {
      case 1:
        this.jugadaSistema = "Piedra";        
        break;

      case 2:        
        this.jugadaSistema = "Tijera";
        break;

      case 3:        
        this.jugadaSistema = "Papel";
        break;
    }
  }



  verificarJugada()
  {
    
    if(this.jugadaUsuario != this.jugadaSistema)
    {
      if(this.jugadaUsuario == "Piedra")
        if (this.jugadaSistema == "Tijera")
          this.unJuego.resultado=true;
        else      
          this.unJuego.resultado=false;

      if(this.jugadaUsuario == "Tijera")
        if (this.jugadaSistema == "Papel")
          this.unJuego.resultado=true;
        else      
          this.unJuego.resultado=false;
      
      if(this.jugadaUsuario == "Papel")
        if (this.jugadaSistema == "Piedra")
          this.unJuego.resultado=true;
        else      
          this.unJuego.resultado=false;

      this.unJuego.juega=false; //revisar mas tarde    
    }

    if (this.unJuego.resultado)
      this.unJuego.mensaje = "Usted ha ganado";    
    else
      this.unJuego.mensaje = "Usted perdio";

  }











}
