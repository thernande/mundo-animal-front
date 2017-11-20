import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Veterinary } from '../../../models/veterinary';
import { GLOBAL } from '../../../services/global';

import { VeterinaryService } from '../../../services/veterinary.service';
import { UploadService } from '../../../services/upload.service';
import { UserService } from '../../../services/user.service';
import { Route } from '@angular/router/src/config';

@Component({
  selector: 'app-add-veterinary',
  templateUrl: './add-veterinary.component.html',
  styleUrls: ['./add-veterinary.component.css'],
  providers: [VeterinaryService, UploadService, UserService]
})
export class AddVeterinaryComponent implements OnInit {
  public title: String;
  public veterinary: Veterinary;
  public status: String;
  public message: String;
  public token;
  public identity;
  public url;
  public filesToUpload: Array<File>;

  constructor(
    private _veterinaryService: VeterinaryService,
    private _userService: UserService,
    private _uploadService: UploadService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.title = "Añadir Veterinaria";
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.veterinary = new Veterinary('','','','','','');
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    console.log('animal-add componente cargado');
  }

  onSubmit(){
    //console.log(this.veterinary);

    this._veterinaryService.addVeterinary(this.token, this.veterinary).subscribe(
      response => {
        console.log(response);
        if(!response.veterinaryStored){
          this.status = "danger";
          this.message = "no se pudo guardar la veterinaria";
        }
        else{
          this.veterinary = response.veterinaryStored;

          //subir la imagen de la veterinaria
          if(this.filesToUpload == null){
            this.status = "danger";
            this.message = "no se guardo la imagen del animal";
          }else{
            this._uploadService.makeFileRequest(this.url+'/upload-image-veterinary/'+this.veterinary._id, [], this.filesToUpload, this.token, 'image')
              .then((result: any) => {
                this.veterinary.image = result.image;
                console.log(this.veterinary);
                //this._router.navigate(['/veterinary/list']);
              }
            );
          }

        }
      },
      error => {
        var errorMessage = <any>error;
        if(errorMessage != null){
          this.status = 'danger';
          this.message = 'error';
        }
      }
    );
  }

  
  fileChangeEvent(fileInput:any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    //console.log(this.filesToUpload);
  }
  

}
