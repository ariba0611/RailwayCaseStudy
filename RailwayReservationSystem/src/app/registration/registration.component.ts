import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms'
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
 
  displayMessage:string = "";
  isAccountCreated:boolean = false;
  constructor(private authService : AuthService, private http : HttpClient) {}
  signupForm = new FormGroup({

    firstname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.pattern('^([0-9a-zA-Z]([-\\.\\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\\w]*[0-9a-zA-Z]\\.)+[a-zA-Z]{2,9})$')]),
    gender:new FormControl('', [Validators.required]),
    password:new FormControl('', [Validators.required, Validators.pattern('(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')]),
    confirmpassword:new FormControl('', [Validators.required, Validators.pattern('(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')])
   
  });

  handleSubmit(){
    console.log(this.signupForm.value);
    this.authService.registerUser([
      this.signupForm.value.firstname,
      this.signupForm.value.lastname,
      this.signupForm.value.email,
      this.signupForm.value.gender,
      this.signupForm.value.password,
     ]).subscribe(response =>{
      if(response == 'Success'){
        this.displayMessage ='Account Created Scucessfully';

       alert("Account Created Scucessfully");
       
        this.isAccountCreated = true;
        this.signupForm.reset();
      }
      else if (response == ' AlreadyExist'){
        this.displayMessage = 'Account Already Exist. Try another Email.';
        this.isAccountCreated = false;

      }
      else{
        this.displayMessage = 'Something went wrong';
        this.isAccountCreated = false;
      }
    })
  }

  get f() {
    return this.signupForm.controls;
  }

}
