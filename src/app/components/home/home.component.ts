import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { News } from '../../models/news';
import { GLOBAL } from '../../services/global';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ NewsService ]
})
export class HomeComponent implements OnInit {
  public news:News[];
  public title:string;
  public message:string;
  public status:string;
  public url:string

  constructor(
    private _newsService: NewsService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.title = "Mundo Animal";
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    this.getNews();    
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
