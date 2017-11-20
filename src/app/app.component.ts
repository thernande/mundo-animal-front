import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public icon: string;

  constructor(
  ){
  	this.icon = "indent";
  }

  changeIcon(){
    if(this.icon == "indent"){
      this.icon = "outdent";
    }
    else{
      this.icon = "indent";
    }
  }
}
