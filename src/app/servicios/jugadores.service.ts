import { Injectable } from '@angular/core';

import { ResponseOptions, Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { MiHttpService } from "./mi-http.service";

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class JugadoresService {


  constructor(private httpMiHttp:MiHttpService, private http:Http)
  {}




  jugadores(archivo)
  {
    return this.httpMiHttp.realJugadores(archivo)
    .then(data => data)
    .catch(data => data)
  }


  verificarLogin()
  {
    return this.httpMiHttp.login()
    .then(data => data)
    .catch(data => data)
  }







  /*
  extraerDatos(resp:Response)
  {return resp.json() || {};}

  handlerError(error: Response)
  {return error;}
  */
}
