import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [ UserService ]
})
export class NewsComponent implements OnInit {
  public identity;

  constructor(
    private _userService:UserService
  ) { 
    this.identity = this._userService.getIdentity();
  }

  ngOnInit() {
  }

}
