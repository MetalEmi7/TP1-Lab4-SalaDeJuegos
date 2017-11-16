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
  event_emitter :EventEmitter<any>;
  unJuego:Juego;  

  jugadaUsuario:string=null;
  jugadaSistema:string;

  aux_jugadaSistema;

  Modo_Testeo = true;

  puntos:number;



  //intentos:any=3;



  constructor()  {
    this.event_emitter = new EventEmitter<any>();
    this.unJuego = new Juego(
      localStorage.getItem("jugador"), 
      "Piedra, Pepel o Tijera", 
      "Debe elegir piedra papel o tijera y ganarle al sistema.", 
      "Haga click en la alguno de los botones (en la piedra, en el papel o en la tijera) para realizar su jugada.");

    this.prepararJuego();
  }



  prepararJuego()
  {
    this.puntos = 0;
    this.unJuego.mensaje="Haga click en la alguno de los botones (en la piedra, en el papel o en la tijera) para realizar su jugada.";
    this.unJuego.juega=true;
    this.jugadaUsuario=null;
    this.generarJugada();
  }



  generarJugada()
  {
    //this.aux_jugadaSistema = 3;
    this.aux_jugadaSistema = Math.floor(Math.random() * ((3+1) - 1)+1);
    console.log(this.aux_jugadaSistema);    

    switch (this.aux_jugadaSistema)
    {
      case 1:
        this.jugadaSistema = "Piedra";        
        break;

      case 2:        
        this.jugadaSistema = "Papel";
        break;

      case 3:        
        this.jugadaSistema = "Tijera";
        break;
    }

    console.log(this.jugadaSistema);


  }



  verificarJugada()
  {    
    if(this.unJuego.juega == true)
    {
    if(this.jugadaUsuario != this.jugadaSistema)
    {

      if(this.jugadaUsuario == "Piedra")
      {
        if (this.jugadaSistema == "Tijera")
        {
          this.unJuego.resultado = true;
          document.getElementById("LblMensaje").setAttribute("class", "text-white");
          this.unJuego.mensaje = "Usted ha ganado";
          this.puntos += 15;
        }
        else
        {      
          this.unJuego.resultado = false;
          document.getElementById("LblMensaje").setAttribute("class", "text-danger");
          this.unJuego.mensaje = "Usted perdio";
        }
      }


      if(this.jugadaUsuario == "Tijera")
      {
        if (this.jugadaSistema == "Papel")
        {
          this.unJuego.resultado = true;
          document.getElementById("LblMensaje").setAttribute("class", "text-white");
          this.unJuego.mensaje = "Usted ha ganado";
          this.puntos += 15;
        }
        else
        {      
          this.unJuego.resultado = false;
          document.getElementById("LblMensaje").setAttribute("class", "text-danger");
          this.unJuego.mensaje = "Usted perdio";
        }
      }
      

      if(this.jugadaUsuario == "Papel")
      {
        if (this.jugadaSistema == "Piedra")
        {
          this.unJuego.resultado = true;
          document.getElementById("LblMensaje").setAttribute("class", "text-white");
          this.unJuego.mensaje = "Usted ha ganado";
          this.puntos += 15;
        }
        else
        {      
          this.unJuego.resultado = false;
          document.getElementById("LblMensaje").setAttribute("class", "text-danger");
          this.unJuego.mensaje = "Usted perdio";
        }
      }      
    }
    else
    {
      this.unJuego.resultado = false;
      this.unJuego.mensaje = "Empate";
      this.puntos += 5;
    }


    
    this.unJuego.mensaje += ". Sumo "+ this.puntos +"Pts., haga click en 'Intentar otra vez' e intente con otra jugada.";

    switch (this.jugadaSistema)
    {
      case "Piedra":
        document.getElementById("BtnPiedra").setAttribute("class", "btn btn-danger active");       
        break;

      case "Papel":        
        document.getElementById("BtnPapel").setAttribute("class", "btn btn-danger active");  
        break;

      case "Tijera":        
        document.getElementById("BtnTijera").setAttribute("class", "btn btn-danger active");  
        break;
    }
    
    
    console.log("PUTA MADRE");
    this.finDelJuego();
    }
  }



QueHay(val)
{
  if (this.unJuego.juega == true)
  {
    this.jugadaUsuario = val.target.alt;
    console.log(this.jugadaUsuario); 

    this.desmarcarBotones();
    switch (this.jugadaUsuario)
    {
      case "Piedra":
        document.getElementById("BtnPiedra_user").setAttribute("class", "btn btn-primary active");   
        break;

      case "Papel":
        document.getElementById("BtnPapel_user").setAttribute("class", "btn btn-primary active");   
        break;

      case "Tijera":    
        document.getElementById("BtnTijera_user").setAttribute("class", "btn btn-primary active"); 
        break;
    }
  }

  this.verificarJugada();
}



desmarcarBotones()
{
  document.getElementById("BtnPiedra_user").setAttribute("class", "btn btn-outline-primary");  
  document.getElementById("BtnPapel_user").setAttribute("class", "btn btn-outline-primary");
  document.getElementById("BtnTijera_user").setAttribute("class", "btn btn-outline-primary"); 

  document.getElementById("BtnPiedra").setAttribute("class", "btn btn-outline-danger");  
  document.getElementById("BtnPapel").setAttribute("class", "btn btn-outline-danger");
  document.getElementById("BtnTijera").setAttribute("class", "btn btn-outline-danger");
}


finDelJuego()
{
  this.unJuego.juega = false;
  this.unJuego.puntajeTotal = Number.parseInt(localStorage.getItem("puntos"));
  this.unJuego.puntajeTotal += this.puntos;
  localStorage.setItem("puntos", this.unJuego.puntajeTotal.toString());
}


reiniciarJuego()
{
  this.prepararJuego();
  this.desmarcarBotones();
}



}
