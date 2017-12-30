import { Component, OnInit } from '@angular/core';
import { News } from '../../../models/news';
import { UploadService } from '../../../services/upload.service';
import { NewsService } from '../../../services/news.service';
import { UserService } from '../../../services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../../../services/global';
import { Route } from '@angular/router/src/config';

@Component({
  selector: 'app-edit-news',
  templateUrl: '../add-news/add-news.component.html',
  styleUrls: ['./edit-news.component.css'],
  providers: [NewsService, UploadService, UserService]
})

export class EditNewsComponent implements OnInit {
  public titlePage: string;
  public news: News;
  public status: string;
  public message: string;
  public token;
  public identity;
  public url;
  public filesToUpload: Array<File>;

  constructor(
    private _newsService: NewsService,
    private _userService: UserService,
    private _uploadService: UploadService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.titlePage = "Editar Noticia";
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.news = new News('','','','','');
    this.url = GLOBAL.url;
   }

  ngOnInit() {
    this.getNews();
  }

  textEditor(content){
    this.news.description = content;
    console.log(this.news.description);
  } 
  
  fileChangeEvent(fileInput:any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    //console.log(this.filesToUpload);
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

  onSubmit(){
    //console.log(this.news);
    this.news.autor = this.identity._id;
    this._newsService.updateNews(this.token, this.news._id, this.news).subscribe(
      response => {
        // console.log(response);
        if(!response.newsUpdate){
          this.status = "danger";
          this.message = "no se pudo guardar la veterinaria";
        }
        else{
          this.news = response.newsUpdate;

          //subir la imagen de la veterinaria
            this._uploadService.makeFileRequest(this.url+'/upload-image-news/'+this.news._id, [], this.filesToUpload, this.token, 'image')
              .then((result: any) => {
                this.news.image = result.image;
                console.log(this.news);
                this._router.navigate(['/news/detail/', this.news._id]);
              }
            );
          

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
}
