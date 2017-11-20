import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public title: String;
  public user: User;
  public identity;
  public token;
  public status: string;
  public message: string;

  constructor(
    private _route: ActivatedRoute, 
  	private _router: Router,
    private _userService: UserService
  ) {
    this.title = "Login";
    this.user = new User('','','','','','ROLE_USER','');
   }

  ngOnInit() {
    //console.log("probando el componente loguin");
  }

  onSubmit(){
  	//loguear al usuario y conseguir el objeto
  	this._userService.signup(this.user).subscribe(
  		response => {
  			this.identity = response.user;

  			if(!this.identity || !this.identity._id){
  				this.status = "danger";
			  	this.message = "el usuario no se ha logueado correctamente";
  			}
  			else{
  				//mostrar identity
  				this.identity.pass = "";

  				localStorage.setItem('identity', JSON.stringify(this.identity));

  				//conseguir el token
			  	this._userService.signup(this.user, 'true').subscribe(
			  		response => {
			  			this.token = response.token;

			  			if(this.token.length <= 0){
			  				alert('el token no se ha generado');
			  			}
			  			else{
			  				//mostrar el token
  							localStorage.setItem('token', this.token);
			  				this.status = "success";
			  				this.message = "loguin correcto";
			  				this._router.navigate(['/home']);
			  			}
			  		},
			  	
			  		error => {
			  			var errorMessage = <any>error;

			  			if(errorMessage != null){
			  				var body = JSON.parse(error._body);
			  				this.status = "danger";
			  				this.message = "no te has podido loguear";
			  			}
			  		}
			  	);
  				
  			}
  		},
  		error => {
  			var errorMessage = <any>error;

			if(errorMessage != null){
				var body = JSON.parse(error._body);
				this.status = "danger";
				this.message = "no te has podido loguear";
			}
  		}
  	);
  }

}
