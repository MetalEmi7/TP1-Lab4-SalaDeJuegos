import { Component, OnInit } from '@angular/core';

import { Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

import { Juego } from "../entidades/juego";
@Component({
  selector: 'app-juego-de-colores',
  templateUrl: './juego-de-colores.component.html',
  styleUrls: ['./juego-de-colores.component.css']
})
export class JuegoDeColoresComponent{
  @Output()
  event_emitter :EventEmitter<Juego>;
  unJuego:Juego;  
  puntos:number;


  respuestaUsuario:string = "";  
  respuestaSistema:string;

  //Systema
  elSistemaPide:string = "Esperando...";  
  colorFondo = "secondary";
  colorLetra = "dark";
  Palabra:string="Negro";

  intentos_Usuario:number = 0;
  intentos_Sistema:number = 5;
  aciertosPositivos:number = 0;

  constructor()  {
    this.event_emitter = new EventEmitter<Juego>();
    this.unJuego = new Juego(
      localStorage.getItem("jugador"), 
      "Juego de Colores", 
      "Responda que color le pide el sistema 10 veces seguidas, le pedira COLOR DE FONDO, COLOR DE LA LETRA y LA PALABRA ESCRITA (mencionara un color)", 
      "Esperando a empezar el juego...");
  }



  prepararJuego()
  {
    this.puntos = 0;
    this.unJuego.juega=true;  
    this.intentos_Usuario = 0;
    this.aciertosPositivos = 0;
    this.unJuego.mensaje = "Escriba el color que se le pide y presione la tecla 'Enter' para verificar las respuestas hasta terminar.";    
    this.jugar();
  }


  keyPressEnter(e)
  {
    if (e.key == "Enter")    
    {
      this.verificar();  
    }
  }


  //Equivalente a GenerarJugada();
  jugar()
  {
    this.elSistemaPide = this.quePide();
    this.colorLetra = this.generarColor();
    this.colorFondo = this.generarColor();
    this.Palabra = this.quePalabra();

    while (this.colorFondo == this.colorLetra) {
      this.colorLetra = this.generarColor();
    }
  }


  generarColor()
  {
    var aux = Math.floor(Math.random() * ((4+1) - 1)+1);
    //console.log(aux);

    switch (aux)
    {
      case 1:
      return "primary";

      case 2:        
      return "danger";

      case 3:        
      return "success";
      
      case 4:        
      return "warning";
    }
  }


  quePalabra()
  {
    var aux = Math.floor(Math.random() * ((4+1) - 1)+1);
    //console.log(aux);

    switch (aux)
    {
      case 1:
      return "Azul";

      case 2:        
      return "Rojo";

      case 3:        
      return "Verde";
      
      case 4:        
      return "Amarillo";
    }
  }


  quePide()
  {
    var aux = Math.floor(Math.random() * ((3+1) - 1)+1);
    //console.log(aux);

    switch (aux)
    {
      case 1:
      return "COLOR DE FONDO";

      case 2:        
      return "COLOR DE LA LETRA";

      case 3:        
      return "QUE PALABRA DICE";
    }
  }





  verificar()
  {
    this.intentos_Usuario++;

    if (this.intentos_Usuario <= this.intentos_Sistema)
    {   
      if (this.unJuego.juega == true)
      {


        switch (this.elSistemaPide)
        {
          case "QUE PALABRA DICE":        
            if (this.respuestaUsuario.toLowerCase() == this.Palabra.toLowerCase() && this.respuestaUsuario.toLowerCase() != "")
            {              
              this.puntos += 10;
              this.aciertosPositivos++;
              document.getElementById("LblMensaje").setAttribute("class", "text-white");
              this.unJuego.mensaje = "Correcto!!! Ahora el siguiente color.";
            }
            else
            {
              document.getElementById("LblMensaje").setAttribute("class", "text-danger");
              this.unJuego.mensaje = "Incorrecto!!! era "+ this.Palabra;
            }
          break;



          case "COLOR DE FONDO":
            switch (this.colorFondo)
            {
              case "primary":
                this.respuestaSistema = "Azul";
              break
        
              case "danger":        
                this.respuestaSistema = "Rojo";
              break

              case "success":        
                this.respuestaSistema = "Verde";
              break

              case "warning":        
                this.respuestaSistema = "Amarillo";
              break
            }
            
            if (this.respuestaUsuario.toLowerCase() == this.respuestaSistema.toLowerCase()) 
            {              
              this.puntos += 10;
              this.aciertosPositivos++;
              document.getElementById("LblMensaje").setAttribute("class", "text-white");
              this.unJuego.mensaje = "Correcto!!! Ahora el siguiente color.";
            }
            else
            {
              document.getElementById("LblMensaje").setAttribute("class", "text-dark");
              this.unJuego.mensaje = "Incorrecto!!! era "+ this.respuestaSistema;
            }
          break;



          case "COLOR DE LA LETRA": 
            switch (this.colorLetra)
            {
              case "primary":
                this.respuestaSistema = "Azul";
              break
        
              case "danger":        
                this.respuestaSistema = "Rojo";
              break

              case "success":        
                this.respuestaSistema = "Verde";
              break

              case "warning":        
                this.respuestaSistema = "Amarillo";
              break
            }
          
            if (this.respuestaUsuario.toLowerCase() == this.respuestaSistema.toLowerCase())
            {              
              this.puntos += 10;
              this.aciertosPositivos++;
              document.getElementById("LblMensaje").setAttribute("class", "text-white");
              this.unJuego.mensaje = "Correcto!!! Ahora el siguiente color.";
            }
            else
            {
              document.getElementById("LblMensaje").setAttribute("class", "text-dark");
              this.unJuego.mensaje = "Incorrecto!!! era "+ this.respuestaSistema;
            }
          break; 



        }
      }
    }    
    this.respuestaUsuario="";
    if (this.intentos_Usuario < this.intentos_Sistema)
      this.jugar();



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
      this.unJuego.mensaje = "Usted perdio!!! no pudo acertar ningun color. ";
      this.unJuego.resultado = false;
    }

    this.unJuego.mensaje += "Haga click en el boton 'Juego nuevo' para volver a jugar.";

    this.resetVariables();
  }







  resetVariables()
  {
    document.getElementById("LblMensaje").setAttribute("class", "text-white");
    this.elSistemaPide = " - Juego de colores - ";  
    this.colorFondo = "secondary";
    this.colorLetra = "dark";
    this.Palabra="Negro";
    this.aciertosPositivos = 0;
  }











}
