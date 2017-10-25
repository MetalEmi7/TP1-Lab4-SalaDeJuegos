import { Component, OnInit } from '@angular/core';

import { Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

import { Juego } from "../entidades/juego";

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {
  @Output()
  event_emitter :EventEmitter<Juego>;

  unJuego:Juego;  
  Modo_Testeo = true;

  private _numMax:number=10;
  private _numMin:number=1;
  numero_Usuario:any;
  numero_Secreto:any;

  intentos:any=3;


  constructor()  {
    this.event_emitter = new EventEmitter<Juego>();

    this.unJuego = new Juego(
      localStorage.getItem("jugador"), 
      "Piedra, Pepel o Tijera", 
      "Debe elegir piedra papel o tijera y ganarle al sistema.", 
      "Esperando...");
  }
  ngOnInit() {
  }

}
