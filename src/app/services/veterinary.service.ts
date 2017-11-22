import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class VeterinaryService {
  public url: string;
  public identity;
  public token;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
   }

   getVeterinaries(){
     return this._http.get(this.url+'/get-veterinaries').map( res => res.json() );
   }

   addVeterinary(token, veterinary){
    let params = JSON.stringify(veterinary);
    let headers = new Headers(
      {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    );
    console.log(params);
    return this._http.post(this.url+'/save-veterinary', params, {headers: headers}).map( res => res.json() );
   }

   getVeterinary(id){
    return this._http.get(this.url+'/get-veterinary/'+id).map( res => res.json() );
   }

   updateVeterinary(token, id, veterinary){
    let params = JSON.stringify(veterinary);
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': token
    });

    return this._http.put(this.url+"/update-veterinary/"+id, params, {headers: headers}).map(res => res.json());
  }
}
