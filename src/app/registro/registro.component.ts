import { Component, OnInit, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

declare var $;

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  
})

export class RegistroComponent implements OnInit{






  ngOnInit()
  {
    $('#exampleModal').modal("show");
  }
}
