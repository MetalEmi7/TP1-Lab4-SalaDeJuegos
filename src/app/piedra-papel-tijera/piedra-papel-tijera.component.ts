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

  jugadaUsuario:string=null;
  jugadaSistema:string;

  aux_jugadaSistema;

  Modo_Testeo = true;

  valor:string;



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
    this.unJuego.mensaje="Esperando...";
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
    if(this.jugadaUsuario != this.jugadaSistema)
    {
      

      if(this.jugadaUsuario == "Piedra")
      {
        if (this.jugadaSistema == "Tijera")
          this.unJuego.resultado=true;
        else      
          this.unJuego.resultado=false;
      }


      if(this.jugadaUsuario == "Tijera")
      {
        if (this.jugadaSistema == "Papel")
          this.unJuego.resultado=true;
        else      
          this.unJuego.resultado=false;
      }
      

      if(this.jugadaUsuario == "Papel")
      {
        if (this.jugadaSistema == "Piedra")
          this.unJuego.resultado=true;
        else      
          this.unJuego.resultado=false;
      }
    }
    else
      this.unJuego.mensaje = "Empate";



    if (this.unJuego.resultado == true)
      this.unJuego.mensaje = "Usted ha ganado";

    if (this.unJuego.resultado == false)
      this.unJuego.mensaje = "Usted perdio";


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
    
    console.log(this.unJuego.mensaje);
    this.unJuego.juega = false;  
  }



QueHay(val)
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

desmarcarBotones()
{
  document.getElementById("BtnPiedra_user").setAttribute("class", "btn btn-outline-primary");  
  document.getElementById("BtnPapel_user").setAttribute("class", "btn btn-outline-primary");
  document.getElementById("BtnTijera_user").setAttribute("class", "btn btn-outline-primary"); 

  document.getElementById("BtnPiedra").setAttribute("class", "btn btn-outline-danger");  
  document.getElementById("BtnPapel").setAttribute("class", "btn btn-outline-danger");
  document.getElementById("BtnTijera").setAttribute("class", "btn btn-outline-danger");
}

reiniciarJuego()
{
  this.prepararJuego();
  this.desmarcarBotones();
}



}
