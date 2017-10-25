import { Component, OnInit} from '@angular/core';

import { Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

import { Juego } from "../entidades/juego";

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})
export class AdivinaElNumeroComponent{
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
        "Adivina el juego", 
        "Debe adivinar el numero secreto del 1 al 10, tiene como maximo 3 intentos_usuario, sino logra adivinarlo debe reiniciar el juego haciendo clic en el boton 'Nuevo', mucha suerte", 
        "Esperando que introduzca un numero...");

      this.GenerarNum();
    }

    

  GenerarNum(){
    this.unJuego.juega=true;    

    this.numero_Secreto = Math.floor(Math.random() * (this._numMax - this._numMin + 1)) + 1;
    this.numero_Usuario = "";

    this._Inspeccion();
  }
  


  Adivinar(){
  if (this.unJuego.juega)
    {
      
    if (this.numero_Usuario == this.numero_Secreto)
      {
        this.unJuego.resultado=true;
        this.unJuego.mensaje="Usted gano!!!";

        this.event_emitter.emit(this.unJuego);         
      }
    else
      {
        this.unJuego.resultado=false;    
        this.unJuego.mensaje="Numero incorrecto, vuelva a intentarlo de nuevo";

        this.event_emitter.emit(this.unJuego);              
      }

    this.unJuego.juega=false;  
    }
    
  this._Inspeccion();
  }


  
  _Inspeccion()
  {
    if(this.Modo_Testeo == true)
    {
    console.log("numero_Usuario - "+this.numero_Usuario);
    console.log("numero_Secreto - "+this.numero_Secreto);
    console.log("unJuego - "+this.unJuego);
    }
  }
}
