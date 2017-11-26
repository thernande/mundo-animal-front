import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class NewsService {
  public url: string;
  public identity;
  public token;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }

  getNews(){
    return this._http.get(this.url+'/get-news').map( res => res.json() );
  }

  getNew(id){
   return this._http.get(this.url+'/get-new/'+id).map( res => res.json() );
  }

  addNews(token, news){
   let params = JSON.stringify(news);
   let headers = new Headers(
     {
       'Content-Type': 'application/json',
       'Authorization': token
     }
   );
   // console.log(params);
   return this._http.post(this.url+'/save-news', params, {headers: headers}).map( res => res.json() );
  }

  updateVeterinary(token, id, news){
   let params = JSON.stringify(news);
   let headers = new Headers({
     'Content-Type': 'application/json',
     'Authorization': token
   });

   return this._http.put(this.url+"/update-news/"+id, params, {headers: headers}).map(res => res.json());
 }
}
