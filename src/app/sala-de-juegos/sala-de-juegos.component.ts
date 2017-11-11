import { Component, OnInit, Input} from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sala-de-juegos',
  templateUrl: './sala-de-juegos.component.html',
  styleUrls: ['./sala-de-juegos.component.css']
})
export class SalaDeJuegosComponent implements OnInit {

  CtrlCarousel:boolean=true;

  constructor(private ruta:Router){ }

  irAJuego(evento)
  {
    switch (evento.target.alt) {
      case "Anagrama":      
      this.ruta.navigate(["/anagrama"]);
      break;

      case "Adivina":        
      this.ruta.navigate(["/adivina"]);  
      break;

      case "Agilidad":        
      this.ruta.navigate(["/agilidad"]);  
      break;

      case "PPT":        
      this.ruta.navigate(["/piedraPapelTijera"]);
      break;

      case "JuegoDeColores":        
      this.ruta.navigate(["/juego de colores"]);
      break;
    }




  }

  ngOnInit() {
  }

}
