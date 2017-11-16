import { Component, OnInit, group} from '@angular/core';

import { Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

import { Juego } from "../entidades/juego";
import { groupBy } from 'rxjs/operators/groupBy';

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})
export class AdivinaElNumeroComponent implements OnInit{
  @Output()
  event_emitter :EventEmitter<Juego>;

    unJuego:Juego;  
    Modo_Testeo = true;

    private _numMax:number=10;
    private _numMin:number=1;

    numero_Usuario:any;
    numero_Secreto:any;

    intentos_Usuario:number=0;
    intentos_Sistema:number=3;

    puntos:number;
    puntos_Negativos:number;
  
    constructor()  {
      this.event_emitter = new EventEmitter<Juego>();

      this.unJuego = new Juego(
        localStorage.getItem("jugador"), 
        "Adivina el juego", 
        "Debe adivinar el numero secreto del 1 al 10, tiene como maximo 3 intentos para lograrlo", 
        "Haga click en el boton 'Juego nuevo' para comenzar.");
      //this.GenerarNum();
    }

    

  GenerarNum(){
    this.puntos = 0;
    this.puntos_Negativos = 0;
    this.intentos_Usuario = 0;
    this.unJuego.juega=true;    

    this.numero_Secreto = Math.floor(Math.random() * (this._numMax - this._numMin + 1)) + 1;
    this.unJuego.mensaje = "Escriba el numero correcta y haga click en 'verificar' o precione la tecla 'enter'.";    
    this._Inspeccion();
  }
  


  Adivinar()
  {
    if (this.intentos_Usuario < this.intentos_Sistema && this.unJuego.juega == true)
    {

      if (this.numero_Usuario == this.numero_Secreto)
      {
          this.puntos += 50 - this.puntos_Negativos;
          //this.event_emitter.emit(this.unJuego);
          this.unJuego.mensaje="Muy bien!!! era el numero "+ this.numero_Secreto +", ";
          this.unJuego.resultado = true;
          
          this.finDelJuego();
      }
      else
      {
        this.puntos_Negativos -= 5;
                    
        if (this.intentos_Usuario < 2)
        {
          if (this.numero_Usuario < this.numero_Secreto)
          {
            document.getElementById("LblMensaje").setAttribute("class", "text-danger");
            this.unJuego.mensaje="Numero incorrecto!: es mas alto.";
          }
          else
          {
            document.getElementById("LblMensaje").setAttribute("class", "text-danger");
            this.unJuego.mensaje="Numero incorrecto!: es mas bajo.";
          }
        }
        else
        {
          this.unJuego.mensaje = "Usted perdio, era el numero "+ this.numero_Secreto +", ";
          this.unJuego.resultado = false;
        }          
        
      }
      this.intentos_Usuario++;
      this.numero_Usuario = null;

    }





    if (this.intentos_Usuario >= this.intentos_Sistema && this.unJuego.juega == true)
    {this.finDelJuego();} 
  }



  resetVariables()
  {
    this.numero_Usuario="";
    this.numero_Secreto="";
  } 



  finDelJuego()
  {
    this.unJuego.juega = false;
    this.unJuego.puntajeTotal = Number.parseInt(localStorage.getItem("puntos").toString());
    this.unJuego.puntajeTotal += this.puntos;
    localStorage.setItem("puntos", this.unJuego.puntajeTotal.toString());


    document.getElementById("LblMensaje").setAttribute("class", "text-white");
    if (this.intentos_Usuario == 0)
      this.unJuego.mensaje += "adivinaste al primer intento, sumas "+ this.puntos +" Pts a tu cuenta. ";
    else
      this.unJuego.mensaje += "sumo un total de "+ this.puntos +" Pts. ";


      this.unJuego.mensaje += "Haga click en el boton 'Juego nuevo' para jugar de nuevo.";

    this.resetVariables();
  }


  
  _Inspeccion()
  {
    if(this.Modo_Testeo == true)
    {
    console.log("numero_Usuario: "+this.numero_Usuario);
    console.log("numero_Secreto: "+this.numero_Secreto);
    console.log("unJuego: "+this.unJuego);
    }
  }



  keyPressEnter(e)
  {
    if (e.key == "Enter")    
    {
      this.Adivinar();  
    }
  }



  ngOnInit()
  {
  }
}
