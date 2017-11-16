import { Component, OnInit, Input } from '@angular/core';
import { JugadoresService } from "../servicios/jugadores.service";

@Component({
  selector: 'app-menu-strip',
  templateUrl: './menu-strip.component.html',
  styleUrls: ['./menu-strip.component.css']
})
export class MenuStripComponent implements OnInit {
Logueado:boolean=false;
cuenta:any;

@Input()
puntosTotales:any;

form ={
  nombre:"",
  password:"",
  mail:"",
  sexo:"",
  foto:""
}

  constructor(private datos:JugadoresService)
  {}   

  Loguearse()
  {
    var auxNombre = this.form.nombre;
    var auxPassword = this.form.password;

    if (this.form.nombre == auxNombre && this.form.password == auxPassword )
    {
      localStorage.setItem("jugador", this.form.nombre);  
      this.Logueado = true;  

      this.cuenta = localStorage.getItem("jugador");
      this.puntosTotales = Number.parseInt(localStorage.getItem("puntos"));

      console.log(localStorage.getItem("jugador"));
    }


  }

  desLoguearse()
  {
    this.Logueado=false;
    localStorage.setItem("jugador", "Anonimo");
    this.cuenta = localStorage.getItem("jugador");

    if (localStorage.getItem("puntos") == "NaN")
    this.puntosTotales = 0;
    
  }








  ngOnInit()
  {
    if (localStorage.getItem("jugador") != "Anonimo") { 
      this.Logueado = true;  
      this.cuenta = localStorage.getItem("jugador");
      this.puntosTotales = Number.parseInt(localStorage.getItem("puntos"));
      console.log(localStorage.getItem("jugador"));
      console.log(localStorage.getItem("puntos"));
    }
    else
    {      
      localStorage.setItem("jugador", "Anonimo");
      this.puntosTotales = 0;

      //this.puntosTotales = Number.parseInt(localStorage.getItem("puntos"));
      this.cuenta = localStorage.getItem("jugador");
      this.puntosTotales = localStorage.getItem("jugador");
      
    }
  }

}
