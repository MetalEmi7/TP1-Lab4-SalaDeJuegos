import { Component, OnInit} from '@angular/core';

import { EventEmitter, Output } from "@angular/core";
import { Juego } from "../entidades/juego";

@Component({
  selector: 'app-agilidad',
  templateUrl: './agilidad.component.html',
  styleUrls: ['./agilidad.component.css']
})
export class AgilidadComponent{
  @Output() 
  event_emitter :EventEmitter<any>= new EventEmitter<any>();
  unJuego:Juego;

  numUno:number=0;
  operador:string="?";
  numDos:number=0;  

  aux_operador:number;

  resultadoUsuario:number;

  resultadoSistema:number;

  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor:any;

  // QUE ES ESTO?
  //private subscription: Subscription;

   constructor()
   {
    this.event_emitter = new EventEmitter<Juego>();
    this.unJuego = new Juego(
      localStorage.getItem("jugador"), 
      "Agilidad aritmetica", 
      "Debe calcular y responder correcta y rapidamente la operacion que el sistema tiene preparado para usted.", 
      "Esperando a que empiece el juego...");
      
      this.prepararJuego();      
    }


    

  prepararJuego()
  {
    this.ocultarVerificar=true;
    this.Tiempo=5; 

    console.info("Inicio agilidad");  

    this.unJuego.mensaje="Esperando...";
  }





  NuevoJuego()
  {
    this.ocultarVerificar=false;
    this.unJuego.juega=true;

    this.repetidor = setInterval(()=>
    {       
        this.Tiempo--;
        console.log("llega", this.Tiempo);

        if(this.Tiempo==0 )
        {
          this.unJuego.juega=false;
          clearInterval(this.repetidor);
          this.verificar();
          this.ocultarVerificar=true;
          this.Tiempo=5;
        }

        //this.resetBotones();

    }, 900);

    this.generarCalculo();
  }


  generarCalculo()
  {
    this.aux_operador = Math.floor(Math.random() * ((4+1) - 1)+1);

    switch (this.aux_operador)
    {
      case 1:
      this.operador = "X";
      this.numUno = Math.floor(Math.random() * ((100+1) - 1)+1);
      this.numDos = Math.floor(Math.random() * ((100+1) - 1)+1);
        break;

      case 2:
      this.operador = "-";
      this.numUno = Math.floor(Math.random() * ((100+1) - 1)+1);
      this.numDos = Math.floor(Math.random() * ((100+1) - 1)+1);
        break;

      case 3:
      this.operador = "+";
      this.numUno = Math.floor(Math.random() * ((100+1) - 1)+1);
      this.numDos = Math.floor(Math.random() * ((100+1) - 1)+1);
        break;

      case 4:
      this.operador = ":";
      var bandera = true;

      while (bandera || (this.numUno % this.numDos) != 0 )
      { 
        bandera=false;     
        this.numUno = Math.floor(Math.random() * ((100+1) - 1)+1);
        this.numDos = Math.floor(Math.random() * ((10+1) - 1)+1);
      }
        break;

    }



    switch (this.operador)
    {
      case "X":
        this.resultadoSistema = this.numUno * this.numDos;
        break;

      case "-":
        this.resultadoSistema = this.numUno - this.numDos;
        break;

      case "+":
        this.resultadoSistema = this.numUno + this.numDos;
        break;

      case ":":
        this.resultadoSistema = this.numUno / this.numDos;
        break;
    }
  }



  verificar()
  {
      this.unJuego.juega=false;
      clearInterval(this.repetidor);
      this.ocultarVerificar=true;
      this.Tiempo=5;      

    if (this.resultadoUsuario == this.resultadoSistema)    
    {
      this.unJuego.resultado=true;
      this.unJuego.mensaje="Usted gano";
      console.log("Usted gano");    
    }
    else
    {
      this.unJuego.resultado=false;
      this.unJuego.mensaje="Usted perdio";
      console.log("Usted perdio");       
    }

    //RESETEAR TODO?
    this.resultadoUsuario=null;
  }  


}
