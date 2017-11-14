import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from "@angular/core";

import { Juego } from "../entidades/juego";
import { JuegoService } from "../servicios/juego.service";

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit{
  @Output()
  event_emitter :EventEmitter<Juego>;

    unJuego:Juego;
    intentos:any=3;

    palabra_Usuario:string="";
    palabra_Sistema:string="";
    palabra_Mezclada:string="";

    private ListaDePalabras:Array<any> = new Array<any>();

    constructor(private datos:JuegoService)  {
      this.event_emitter = new EventEmitter<Juego>();

      this.unJuego = new Juego(
        localStorage.getItem("jugador"), 
        "Anagrama", 
        "Apareceran palabras con sus letras mezcladas, hay de descifrar cual es la palabra correcta para sumar puntos", 
        "Haga click en el boton 'iniciar' para comenzar el juego");

      //this.GenerarNum();
    }

    

  obtenerPalabra()
  { 
    this.palabra_Mezclada = "";

    this.datos.palabras()
    .then(data=>{

    this.unJuego.mensaje = "Escriba la palabra correcta y haga click en 'verificar' o precione la tecla 'enter'.";
    this.unJuego.juega=true;
    
    this.ListaDePalabras = data;

    if (this.ListaDePalabras.length > 0)
    {
      this.ListaDePalabras = this.ListaDePalabras.sort(()=>{ return Math.random() - 0.5});
      this.palabra_Sistema = this.ListaDePalabras.pop().toUpperCase();

      this.mezclarLetras();
    }

    })
    .catch()

    console.log("Palabra correcta: "+ this.palabra_Sistema);
  }

  mezclarLetras()
  {
    do
    {
      this.palabra_Mezclada = this.palabra_Sistema.split('').sort(function(){return 0.5 - Math.random() }).join('');
    } while (this.palabra_Mezclada == this.palabra_Sistema)
  }
  


  verificar()
  {
    if(this.palabra_Usuario.toUpperCase() == this.palabra_Sistema.toUpperCase())
    {
      this.unJuego.juega = false;
      this.unJuego.resultado = true;

      alert("Usted Gano");
    }
    else
    {
      this.unJuego.juega = false;
      this.unJuego.resultado = false;

      alert("Usted perdio");
      
    }

    this.resetControlTxt();
  }

  resetControlTxt()
  {
    this.palabra_Usuario = "";
    this.palabra_Sistema = "";
    this.palabra_Mezclada = "****";
    
    this.unJuego.mensaje = "Haga click en el boton 'iniciar' para comenzar el juego";

}



  ngOnInit()
  {}
}
