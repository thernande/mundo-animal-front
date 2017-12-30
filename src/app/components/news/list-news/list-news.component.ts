import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GLOBAL } from '../../../services/global';
import { UserService } from '../../../services/user.service';
import { NewsService } from '../../../services/news.service';
import { News } from '../../../models/news';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.css'],
  providers: [ NewsService, UserService ]
})
export class ListNewsComponent implements OnInit, AfterViewInit{
  public news:News[];
  public titlePage:string;
  public url:string;
  public identity;
  public status: string;
  public message: string;

  constructor(
    private _newsService:NewsService,
    private _userService:UserService
  ) {
    this.identity = this._userService.getIdentity();
    this.titlePage = "Noticias";
    this.url = GLOBAL.url;
   }

  ngOnInit() {
    if(this.identity == null){
      this.identity = 'nada';
    }
    this.getNews();
  }

  ngAfterViewInit() {
    
  }

  getNews(){
    this._newsService.getNews().subscribe(
      response => {
        if(response.news){
          this.news = response.news;
        }
        else{
          this.status = "danger";
          this.message = "no se han podido cargar los datos";
        }
      },
      error => {
        console.log(<any>error)
      }
    );
  }

}
