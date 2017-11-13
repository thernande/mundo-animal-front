import { Component, OnInit } from '@angular/core';
import { Veterinary } from '../../models/veterinary';
import { VeterinaryService } from '../../services/veterinary.service';

@Component({
  selector: 'app-veterinary',
  templateUrl: './veterinary.component.html',
  styleUrls: ['./veterinary.component.css'],
  providers: [ VeterinaryService ]
})
export class VeterinaryComponent implements OnInit {
  public veterinary: Veterinary[];
  public title: string;

  constructor(
    private _veterinaryService: VeterinaryService,

  ) {
    this.title = "Directorio";
   }

  ngOnInit() {
    this.getVeterinaries();
  }

  getVeterinaries(){
    this._veterinaryService.getVeterinaries().subscribe( 
      response => {
        if(response.veterinaries){
          this.veterinary = JSON.parse(response.veterinaries);
        }
      },
      error => {
        console.log(<any>error);
      }
     );
  }

}
