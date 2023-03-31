import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(private loginAuth : AuthService, private router : Router) {
   
  }
  LoginRail = new FormGroup({

    email: new FormControl('', [Validators.required, Validators.pattern('^([0-9a-zA-Z]([-\\.\\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\\w]*[0-9a-zA-Z]\\.)+[a-zA-Z]{2,9})$')]),
    password:new FormControl('', [Validators.required, Validators.pattern('(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')]),
    
  });

  isUserValid:boolean = false;

 
   

  LoginSubmitted(){
    var token = localStorage.getItem("AccessToken");
    this.loginAuth.loginUser([this.LoginRail.value.email,this.LoginRail.value.password]).subscribe(response =>{

      if(response == 'Failure'){
        this.isUserValid = false;
        alert('Login Unsuccessful');
      }
      else {
        this.isUserValid = true;
        this.loginAuth.setToken(response);
        this.router.navigateByUrl('reservation')
      }

    })
    console.log(this.LoginRail.value)

  }

  get f() {
    return this.LoginRail.controls;
  }

}
