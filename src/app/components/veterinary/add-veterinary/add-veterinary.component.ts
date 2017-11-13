import { Component, OnInit } from '@angular/core';
import { Veterinary } from '../../../models/veterinary';

import { VeterinaryService } from '../../../services/veterinary.service';

@Component({
  selector: 'app-add-veterinary',
  templateUrl: './add-veterinary.component.html',
  styleUrls: ['./add-veterinary.component.css']
})
export class AddVeterinaryComponent implements OnInit {
  public title: "Añadir Veterinaria"
  constructor(
    private _servicesVeterinary: VeterinaryService
  ) { }

  ngOnInit() {
  }

}
