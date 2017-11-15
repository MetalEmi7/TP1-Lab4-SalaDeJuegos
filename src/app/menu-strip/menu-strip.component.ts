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
puntosTotales:number = 0;

form ={
  nombre:"avolker0",
  password:"9123725639",
  mail:"",
  sexo:"",
  foto:""
}

//Usuario de prueba
user ={
  cuit: 91237256393,
  usuario:"avolker0",
  email:"fdelamar0@wikipedia.org",
  puntaje:3466,
  fecha:"12/03/2017",
  sexo:"M",
  gano:false
}

  constructor(private datos:JugadoresService)
  {}   

  Loguearse()
  {
    //PARA JUGADORES
    /*    
    this.datos.verificarLogin()
    .then(data=>{

      data.forEach(element => {
        if (this.form.password == element.password && this.form.nombre == element.nombre)
        {
          this.Logueado = true;
          localStorage.setItem("jugador", element.nombre);
          console.log(element);
        }                
      });

    })
    .catch(error=> console.log(error)) 
    */

    //PARA USUARIOS
    this.datos.verificarLogin()
    .then(data=>{

      data.forEach(element => {
        if (this.user.cuit == element.cuit && this.user.usuario == element.usuario)
        {
          this.Logueado = true;
          localStorage.setItem("jugador", element.usuario);
          console.log(element);
        }                
      });

    })
    .catch(error=> console.log(error)) 

  }

  desLoguearse()
  {
    this.Logueado=false;
    localStorage.setItem("jugador", "Anonimo");
  }








  ngOnInit()
  {
      this.cuenta = localStorage.getItem("jugador");
  }

}
