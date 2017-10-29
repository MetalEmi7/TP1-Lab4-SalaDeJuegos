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


  private extraerDatos(resp:Response) {
    return resp.json() || {}
  }

  private handlerError(error:Response | any) {
    return error;
  }


}
