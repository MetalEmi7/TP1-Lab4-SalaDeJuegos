import { Injectable } from '@angular/core';

import { ResponseOptions, Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { MiHttpService } from "./mi-http.service";

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class JuegoService {

  constructor(private httpMiHttp:MiHttpService) { }


  palabras()
  {
    return this.httpMiHttp.realPalabras()
    .then(data => data)
    .catch(data => data)
  }

}
