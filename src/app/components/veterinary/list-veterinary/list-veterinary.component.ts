import { Component, OnInit } from '@angular/core';
import { Veterinary } from '../../../models/veterinary';
import { VeterinaryService } from '../../../services/veterinary.service';
import { GLOBAL } from '../../../services/global';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-list-veterinary',
  templateUrl: './list-veterinary.component.html',
  styleUrls: ['./list-veterinary.component.css']
})
export class ListVeterinaryComponent implements OnInit {
  public veterinaries: Veterinary[];
  public title: string;
  public url: string;
  public identity;

  constructor(
    private _veterinaryService:VeterinaryService,
    private _userService:UserService
  ) {
    this.title = "Directorio";
    this.url = GLOBAL.url;
    this.identity = this._userService.getIdentity();
   }

  ngOnInit() {
    if(this.identity == null){
      this.identity = 'nada';
    }
    this.getVeterinaries();
  }

  getVeterinaries(){
    this._veterinaryService.getVeterinaries().subscribe( 
      response => {
        // console.log(response);
        if(response.veterinaries){
          this.veterinaries = response.veterinaries;
        }
      },
      error => {
        console.log(<any>error);
      }
     );
  }

}
