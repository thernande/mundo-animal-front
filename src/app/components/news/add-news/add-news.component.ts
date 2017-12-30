import { Component, OnInit } from '@angular/core';
import { News } from '../../../models/news';
import { UploadService } from '../../../services/upload.service';
import { NewsService } from '../../../services/news.service';
import { UserService } from '../../../services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../../../services/global';
import { Route } from '@angular/router/src/config';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css'],
  providers: [ NewsService, UploadService, UserService ]
})
export class AddNewsComponent implements OnInit {
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
    this.titlePage = "Nueva Noticia";
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.news = new News('','','','','');
    this.url = GLOBAL.url;
  }

  ngOnInit() {
  }

  textEditor(content){
    this.news.description = content;
    console.log(this.news.description);
  } 
  
  fileChangeEvent(fileInput:any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    //console.log(this.filesToUpload);
  }

  onSubmit(){
    //console.log(this.news);
    if(this.filesToUpload == null){
      this.status = "danger";
      this.message = "no hay imagen para la noticia";
    }
    else{
      this.news.autor = this.identity._id;
      this._newsService.addNews(this.token, this.news).subscribe(
        response => {
          // console.log(response);
          if(!response.newsStored){
            this.status = "danger";
            this.message = "no se pudo guardar la veterinaria";
          }
          else{
            this.news = response.newsStored;
  
            //subir la imagen de la veterinaria
              this._uploadService.makeFileRequest(this.url+'/upload-image-news/'+this.news._id, [], this.filesToUpload, this.token, 'image')
                .then((result: any) => {
                  this.news.image = result.image;
                  console.log(this.news);
                  this._router.navigate(['/news/list']);
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
  
}
