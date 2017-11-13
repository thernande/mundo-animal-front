import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../../../services/global';
import { UserService } from '../../../services/user.service';
import { UploadService } from '../../../services/upload.service';

@Component({
  selector: 'admin-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [UserService, UploadService]
})
export class AddComponent implements OnInit {
	public title = "Añadir";
  public identity;
  public token;
  public url: string;
  public status: string;
  public message: string;
  public edit: boolean;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _uploadService: UploadService
  ) {
    this.title = 'Añadir';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
    this.edit = false;
  }

  ngOnInit() {
    console.log('animal-add componente cargado');
  }



  public filesToUpload: Array<File>;
  fileChangeEvent(fileInput:any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    //console.log(this.filesToUpload);
  }

}
