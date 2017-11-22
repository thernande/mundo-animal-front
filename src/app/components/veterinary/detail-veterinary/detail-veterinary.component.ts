import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Veterinary } from '../../../models/veterinary';
import { VeterinaryService } from '../../../services/veterinary.service';
import { GLOBAL } from '../../../services/global';

@Component({
  selector: 'app-detail-veterinary',
  templateUrl: './detail-veterinary.component.html',
  styleUrls: ['./detail-veterinary.component.css'],
  providers: [ VeterinaryService ]
})
export class DetailVeterinaryComponent implements OnInit {
  public title:string;
  public url:string;
  public veterinary:Veterinary;

  constructor(
    private _router:Router,
    private _route:ActivatedRoute,
    private _veterinaryService:VeterinaryService
  ) {
      this.url = GLOBAL.url;
   }

  ngOnInit() {
    this.getVeterinary();
  }

  getVeterinary(){
    this._route.params.forEach((params: Params) => {
      let id = params['id'];
      
      this._veterinaryService.getVeterinary(id).subscribe(
        response =>{
          if(!response.veterinary){
            this._router.navigate(['/veterinary']);
          }
          else{
            this.veterinary = response.veterinary;
          }
        },
        error => {
          console.log(<any>error);
          this._router.navigate(['/veterinary']);
        }
      );
    });
  }

}
