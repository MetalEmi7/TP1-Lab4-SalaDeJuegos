import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

form ={
  nombre:"",
  password:"",
  mail:"",
  sexo:"",
  foto:""
}

  constructor()
  {
    localStorage.setItem("jugador", "Anonimo");
  }   


  ngOnInit() {
  }

}
