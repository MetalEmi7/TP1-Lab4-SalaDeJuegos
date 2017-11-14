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
  
  respuestaUsuario:string = "";  
  respuestaSistema:string;

  //Systema
  elSistemaPide:string = "Esperando...";  
  colorFondo = "secondary";
  colorLetra = "dark";
  Palabra:string="Negro";

  cont:number = 0;
  cuantasVeces:number = 10;
  ptsParaGanar:number = 0;

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
    this.unJuego.juega=true;    
    this.jugar();
  }


  keyPressEnter(e)
  {
    if (e.key == "Enter")    
    {
      this.verificar();
      this.jugar();    
    }
  }


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
    this.cont++;

    if (this.cont <= this.cuantasVeces)
    {     
    
      if (this.unJuego.juega == true)
      {

        switch (this.elSistemaPide)
        {
          case "QUE PALABRA DICE":        
            if (this.respuestaUsuario.toLowerCase() == this.Palabra.toLowerCase())
            {        
              //this.cont++;      
              this.ptsParaGanar++ 
              console.log("punto"); 
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
              //this.cont++;      
              this.ptsParaGanar++ 
              console.log("punto"); 
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
              //this.cont++;      
              this.ptsParaGanar++ 
              console.log("punto"); 
            }
          break; 


        }
      }
    }

    if (this.cont == this.cuantasVeces)
    {
      if (this.ptsParaGanar == 10)
      {
        this.unJuego.resultado = true;
        alert("USTED HA GANADO");
        this.unJuego.mensaje = "Usted gano!";
      }
      else{
        this.unJuego.resultado = false;
        this.unJuego.mensaje = "Usted perdio!";
      }

      console.log("");
      this.reiniciarControles();
      this.unJuego.juega = false;
    }

    this.respuestaUsuario="";
  }


  reiniciarControles()
  {

    this.elSistemaPide = "Esperando...";  
    this.colorFondo = "secondary";
    this.colorLetra = "dark";
    this.Palabra="Negro";
    //NO ESTA REINICIANDO LOS COLORES... NOSE POR QUE!!!

    this.cont = 0;
    this.ptsParaGanar = 0;
    //Esto si anda :P
  }











}
