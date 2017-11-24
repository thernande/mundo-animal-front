import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Veterinary } from '../../../models/veterinary';
import { GLOBAL } from '../../../services/global';

import { VeterinaryService } from '../../../services/veterinary.service';
import { UploadService } from '../../../services/upload.service';
import { UserService } from '../../../services/user.service';
import { Route } from '@angular/router/src/config';
import { Response } from '@angular/http/src/static_response';

@Component({
  selector: 'app-edit-veterinary',
  templateUrl: '../add-veterinary/add-veterinary.component.html',
  styleUrls: ['./edit-veterinary.component.css'],
  providers: [ VeterinaryService, UserService, UploadService]
})
export class EditVeterinaryComponent implements OnInit {
  public title: string;
  public veterinary: Veterinary;
  public token;
  public url: string;
  public status: string;
  public message: string;
  public identity;
  public filesToUpload: Array<File>;

  constructor(
    private _veterinaryService:VeterinaryService,
    private _userService:UserService,
    private _uploadService:UploadService,
    private _router:Router,
    private _route:ActivatedRoute
  ) {
    this.title = "Editar Veterinaria";
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.veterinary = new Veterinary('','','','','','');
    this.url = GLOBAL.url;
   }

  ngOnInit() {
    this.getVeterinary();
  }

  onSubmit(){
    let id = this.veterinary._id;
    this._veterinaryService.updateVeterinary(this.token, id, this.veterinary).subscribe(
      response => {
        if(response.veterinaryUpdate){
          this.veterinary = response.veterinaryUpdate;
          this.status = "success";
          this.message = "se ha actualizado el usuario";
          if(this.filesToUpload){
            this._uploadService.makeFileRequest(this.url+'/upload-image-veterinary/'+this.veterinary._id, [], this.filesToUpload, this.token, 'image')
              .then((result:any)=>{
                this.veterinary.image = result.image;
                this.message = this.message+" y se ha cambiado la imagen";
              });
          }
          else{
            this.status = "warning";
            this.message = this.message+" y no se ha guardado la imagen";
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

  fileChangeEvent(fileInput:any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    //console.log(this.filesToUpload);
  }

}
