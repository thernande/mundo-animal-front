import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../../../services/global';
import { UserService } from '../../../services/user.service';
import { UploadService } from '../../../services/upload.service';

@Component({
  selector: 'admin-edit',
  templateUrl: '../add/add.component.html',
  providers: [UserService,UploadService]
})
export class EditComponent implements OnInit {
	public title: string;
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
    this.title = 'Editar';
    this.token = this._userService.getToken();
    this.edit = true;
    this.url = GLOBAL.url;
  }

  ngOnInit() {
  }

  

}
