import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-sala-de-juegos',
  templateUrl: './sala-de-juegos.component.html',
  styleUrls: ['./sala-de-juegos.component.css']
})
export class SalaDeJuegosComponent implements OnInit {

  CtrlCarousel:boolean=true;

  constructor() { }

  ngOnInit() {
  }

}
