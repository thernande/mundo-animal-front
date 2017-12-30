import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../../../services/global';
import { NewsService } from '../../../services/news.service';
import { News } from '../../../models/news';

@Component({
  selector: 'app-detail-news',
  templateUrl: './detail-news.component.html',
  styleUrls: ['./detail-news.component.css'],
  providers: [ NewsService ]
})

export class DetailNewsComponent implements OnInit {
  public news:News;
  public url:string;

  constructor(
    private _router:Router,
    private _route:ActivatedRoute,
    private _newsService:NewsService
  ) {
    this.url = GLOBAL.url;
    this.news = new News("","","","","");
   }

  ngOnInit() {
    this.getNews();
  }

  getNews(){
    this._route.params.forEach((params: Params) => {
      let id = params['id'];
      
      this._newsService.getNew(id).subscribe(
        response =>{
          if(!response.news){
            this._router.navigate(['/news']);
          }
          else{
            this.news = response.news;
          }
        },
        error => {
          console.log(<any>error);
          this._router.navigate(['/news']);
        }
      );
    });
  }
}
