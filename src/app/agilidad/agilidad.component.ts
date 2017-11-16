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

  
  ocultarVerificar: boolean=false;
  Tiempo: number;
  repetidor:any;



  intentos_Usuario:number = 0;
  intentos_Sistema:number = 5;
  aciertosPositivos:number = 0;

  puntos:number;






  // QUE ES ESTO?
  //private subscription: Subscription;

   constructor()
   {
    this.event_emitter = new EventEmitter<Juego>();
    this.unJuego = new Juego(
      localStorage.getItem("jugador"), 
      "Agilidad aritmetica", 
      "Debe calcular y responder correcta y rapidamente la operacion que el sistema tiene preparado para usted.", 
      "Haga clic en el TextBox y presione la tecla 'Enter' para iniciar el juego, Para verificar el resultado vuelva a precionar la tecla 'Enter' hasta que termine el juego.");
  }


    

  prepararJuego()
  {
    this.puntos = 0;
    this.unJuego.juega = true;
    this.intentos_Usuario = 0;
    this.unJuego.mensaje="Para verificar el resultado vuelva a precionar la tecla 'Enter'.";
    //this.Tiempo = 7;

    this.generarCalculo();
    
    /*
    this.repetidor = setInterval(()=>
    {       
        this.Tiempo--;
        console.log("llega", this.Tiempo);

        if(this.Tiempo == 0)
        {this.reiniciarCuentaAtras();}
    }, 900);
    */
    
  }

    

  generarCalculo()
  {
    console.log("entro 3");
    this.aux_operador = Math.floor(Math.random() * ((4+1) - 1)+1);

    switch (this.aux_operador)
    {
          case 1:
          this.operador = "X";
          this.numUno = Math.floor(Math.random() * ((100+1) - 1)+1);
          this.numDos = Math.floor(Math.random() * ((10+1) - 1)+1);
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
            bandera = false;     
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


    console.log("RDO: "+ this.resultadoSistema);
  }



  verificar()
  {
    if (this.intentos_Usuario < this.intentos_Sistema)
    {
      //this.reiniciarCuentaAtras();
      console.log("RDO: "+this.resultadoSistema);

      if (this.resultadoUsuario == this.resultadoSistema){
        this.puntos += 25;
        this.aciertosPositivos++;
        document.getElementById("LblMensaje").setAttribute("class", "text-white");
        this.unJuego.mensaje = "Correcto! calcule el siguiente calculo...";
      }
      else{
        document.getElementById("LblMensaje").setAttribute("class", "text-danger");
        this.unJuego.mensaje = "Incorrecto! era "+ this.resultadoSistema +" calcule el siguiente calculo...";
      }
    }
    this.intentos_Usuario++; 
    this.resultadoUsuario = null


    if (this.intentos_Usuario < this.intentos_Sistema)
      this.generarCalculo();  
    

    if (this.intentos_Usuario >= this.intentos_Sistema)
      {this.finDelJuego();}
  }  



  finDelJuego()
  {
    this.unJuego.juega = false;
    this.unJuego.puntajeTotal = Number.parseInt(localStorage.getItem("puntos").toString());
    this.unJuego.puntajeTotal += this.puntos;
    localStorage.setItem("puntos", this.unJuego.puntajeTotal.toString());
    

    if (this.aciertosPositivos == this.intentos_Sistema){
      this.unJuego.mensaje = "Excelente puntuacion! sumo un total de "+ this.puntos +" Pts. ";
      this.unJuego.resultado = true;
    }
    else if (this.aciertosPositivos > 0){
      this.unJuego.mensaje = "Sumo un total de "+ this.puntos +" Pts. ";
      this.unJuego.resultado = true;
    }
    else{
      this.unJuego.mensaje = "Usted perdio!!! no pudo acertar ninguna cuenta. ";
      this.unJuego.resultado = false;
    }
      this.unJuego.mensaje += "Haga clic en el TextBox y presione la tecla 'Enter' o haga click en 'Nuevo' para volver a jugar.";



    this.resetVariables();
  }




  resetVariables()
  {
    this.resultadoUsuario = null;
    this.resultadoSistema = null;
    
    this.numUno = 0;
    this.operador = "?";
    this.numDos = 0; 

    this.aciertosPositivos = 0;
    document.getElementById("LblMensaje").setAttribute("class", "text-white");
  }



  keyPressEnter(e)
  {
    console.log(e);

    if (e.key == "Enter")
    {
      if (this.unJuego.juega == false)
        this.prepararJuego();
      else
        {this.verificar();}
    }

  }

/*
  reiniciarCuentaAtras()
  {
    this.Tiempo = 7;
    clearInterval(this.repetidor);          
    this.verificar();
  }
*/
}
