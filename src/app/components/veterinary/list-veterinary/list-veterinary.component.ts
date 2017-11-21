import { Component, OnInit } from '@angular/core';
import { Veterinary } from '../../../models/veterinary';
import { VeterinaryService } from '../../../services/veterinary.service';
import { GLOBAL } from '../../../services/global';

@Component({
  selector: 'app-list-veterinary',
  templateUrl: './list-veterinary.component.html',
  styleUrls: ['./list-veterinary.component.css']
})
export class ListVeterinaryComponent implements OnInit {
  public veterinaries: Veterinary;
  public title: string;
  public url: string;

  constructor(private _veterinaryService: VeterinaryService) {
    this.title = "Directorio";
    this.url = GLOBAL.url;
   }

  ngOnInit() {
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
