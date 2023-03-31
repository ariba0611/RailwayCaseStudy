import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';
import { Router } from '@angular/router';


function _window() : any {
 
  return window;
}

@Injectable({
  providedIn: 'root' 
})



export class AuthService {
  
  currentUserInfo : BehaviorSubject<any> = new BehaviorSubject(null);


  private apiurl = "http://localhost:5001/api/";

  
  JwtHelperService = new JwtHelperService();

  constructor(private http:HttpClient,private router : Router) { }

   
  registerUser(user: Array<any>){
    return this.http.post(this.apiurl+"User/CreateUser",
    {
      FirstName:user[0],
      LastName:user[1],
      Email: user[2],
      Gender:user[3],
      Password:user[4]
    }
    
    ,{
      responseType: 'text'
    });
  }


  loginUser(loginInfo: Array<any>){
    return this.http.post(this.apiurl+"User/LoginUser",
    {
     
      Email: loginInfo[0],
      Password:loginInfo[1]
    }
    
    ,{
      responseType: 'text'
    });
  }


  setToken(token:string){
    localStorage.setItem("AccessToken",token);
    this.GetCurrentUser();
  }

  GetCurrentUser(){
   var token = localStorage.getItem("AccessToken");
   var userDetails = token !=null ? this.JwtHelperService.decodeToken(token) : null;
   var UserData = userDetails ? {
    id: userDetails.id,
    firstname: userDetails.firstname,
    lastname: userDetails.lastname,
    email : userDetails.email,
    gender: userDetails.gender
   } : null;
   this.currentUserInfo.next(UserData);
  }
  

  IsUserLoggedIn():any{
    return localStorage.getItem("AccessToken") ? true : this.router.navigateByUrl('login-page');
  }

  LogOutToken(){
    return localStorage.removeItem("AccessToken");
  }


  //RazorPay
  get nativeWindow() : any {
    return _window();
 }

  

}