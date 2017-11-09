import { Component, OnInit } from '@angular/core';
import { JugadoresService } from "../servicios/jugadores.service";


@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
Logueado:boolean=false;


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


  Registrarse()
  {
  }











  ngOnInit()
  {
      if (localStorage.getItem("jugador") == "Anonimo" )
      {        
        this.Logueado=false;
        console.log("NO logueado");
      }
      else
      {  
        console.log("SI logueado");
        this.Logueado = true;
      }
  }

  /*
  _datosDePrueba()
  {
    this.form.nombre = "Admin";
    this.form.password = "123456";
    this.form.mail = "TEST@Gmail.com";
  }*/

}
