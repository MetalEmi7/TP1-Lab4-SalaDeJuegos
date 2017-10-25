import { Component, OnInit} from '@angular/core';

import { EventEmitter, Output } from "@angular/core";
import { Juego } from "../entidades/juego";

@Component({
  selector: 'app-agilidad',
  templateUrl: './agilidad.component.html',
  styleUrls: ['./agilidad.component.css']
})
export class AgilidadComponent implements OnInit {
  @Output() 
  enviarJuego :EventEmitter<any>= new EventEmitter<any>();

  unJuego:Juego;

  private numero_uno:number;
  private numero_dos:number;
  operador:string;

  numeroIngresado:number;

  gano:boolean;  

  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor:any;

  // QUE ES ESTO?
  //private subscription: Subscription;

   constructor()
   {
    this.unJuego = new Juego(
      "algo",
      "Agilidad Aritmetica",
      "Nose que hay que hacer pero voy a copiar el codigo del TP del profe",
      "Esperando resultado");

    this.ocultarVerificar=true;
    this.Tiempo=5; 

    console.info("Inicio agilidad");  
  }


  
  NuevoJuego()
  {
    this.ocultarVerificar=false;
    this.repetidor = setInterval(()=>{       
        this.Tiempo--;

        console.log("llego", this.Tiempo);

        if(this.Tiempo==0 ) {
          clearInterval(this.repetidor);
          this.verificar();
          this.ocultarVerificar=true;
          this.Tiempo=5;
        }

    }, 900);
  }



  verificar()
  {
    this.ocultarVerificar=false;
    clearInterval(this.repetidor);
  }  




  ngOnInit() {
  }

}
