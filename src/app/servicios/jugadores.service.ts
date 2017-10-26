import { Injectable } from '@angular/core';

import {  ResponseOptions, Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { ArchivosJugadoresService } from "./archivos-jugadores.service";

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class JugadoresService {

  constructor(private http:ArchivosJugadoresService)
  {}


  jugadores(archivo, filtro)
  {
    //let url="http://Localhost/slim/apirest/a donde apunta esto?";
    //let url="http://Localhost:8080/slim/apirest/jugaodres/conFiltro";

    return this.http.archivosJugadores(archivo)
    .then(this.extraerDatos)
    .catch(this.handlerError)
  }


  private extraerDatos(resp:Response) {
    return resp.json() || {}
  }

  handlerError(error: Response)  {
    return error;
  }
}
