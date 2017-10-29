import { Component, OnInit, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload';

import { MiHttpService } from "../servicios/mi-http.service";

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  
})

export class RegistroComponent {
  
  public uploader:FileUploader = new FileUploader({url: "http://localhost/slim/apirest/imagenes/"});

  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false; 

  
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

  constructor(public archivo:MiHttpService)
  {}


  QueHay(arc)
  {
    this.archivo.SubirArchivo(this.uploader)
    .then(data=>{

      console.log(data);

    })
  }

}
