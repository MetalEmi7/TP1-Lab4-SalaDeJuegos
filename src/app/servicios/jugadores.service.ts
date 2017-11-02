import { Injectable } from '@angular/core';

import { ResponseOptions, Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { ArchivosJugadoresService } from "./archivos-jugadores.service";

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class JugadoresService {

  constructor(private httpArchivo:ArchivosJugadoresService, private http:Http)
  {}


  jugadores(archivo)
  {
    return this.http.get("../../assets/archivos/" + archivo)
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handlerError)
  }


  extraerDatos(resp:Response)
  {return resp.json() || {};}

  handlerError(error: Response)  {
    return error;
  }
}
