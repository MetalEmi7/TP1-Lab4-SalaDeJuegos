import { Injectable } from '@angular/core';
import { Http, Response, ResponseOptions } from "@angular/http";
import { Observable } from "rxjs/observable";

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MiHttpService {

  constructor(public http:Http) { }

  public SubirArchivo(arc)  {
    let url = " http://localhost/slim/apirest/archivos/subir";

    return this.http
    .post(url, arc)
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handlerError)
  }


  public realJugadores(archivo)
  {
    return this.http.get("./assets/archivos/" + archivo)
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handlerError)
  }


  public realPalabras()
  {
    return this.http.get("./assets/archivos/palabras.json")
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handlerError)
  }


  public login()
  {
    let archivoU = "usuarios.json";
    let archivoJ = "jugadores.json";

    return this.http.get("./assets/archivos/" + archivoU)
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handlerError)
  }

//Tratar datos desde aca?


  private extraerDatos(resp:Response) {
    return resp.json() || {}
  }

  private handlerError(error:Response | any) {
    return error;
  }


}
