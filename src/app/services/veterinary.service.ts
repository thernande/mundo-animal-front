import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class VeterinaryService {
  public url: string;
  public identity;
  public token

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
   }

   getVeterinaries(){
     return this._http.get(this.url+'/get-veterinaries').map(res => res.json());
   }
}
