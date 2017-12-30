import { Component, OnInit } from '@angular/core';
import { Veterinary } from '../../models/veterinary';
import { VeterinaryService } from '../../services/veterinary.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-veterinary',
  templateUrl: './veterinary.component.html',
  styleUrls: ['./veterinary.component.css'],
  providers: [ VeterinaryService, UserService ]
})
export class VeterinaryComponent implements OnInit {
  public identity;

  constructor(
    private _userService: UserService
  ) {
    this.identity = this._userService.getIdentity();
   }

  ngOnInit(){
    if(this.identity == null){
      this.identity = 'nada';
    }
  }
}
