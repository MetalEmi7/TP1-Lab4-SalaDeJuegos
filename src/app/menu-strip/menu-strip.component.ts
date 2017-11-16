import { Component, OnInit } from '@angular/core';
import { JugadoresService } from "../servicios/jugadores.service";

@Component({
  selector: 'app-menu-strip',
  templateUrl: './menu-strip.component.html',
  styleUrls: ['./menu-strip.component.css']
})
export class MenuStripComponent implements OnInit {
Logueado:boolean=false;

cuenta:any;
puntosTotales:string;

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
    }


  }

  desLoguearse()
  {
    this.Logueado=false;
    localStorage.setItem("jugador", "Anonimo");
  }








  ngOnInit()
  {
    if (localStorage.getItem("jugador")) {
      localStorage.setItem("jugador", this.form.nombre);  
      this.Logueado = true;  
    }
  }

}
