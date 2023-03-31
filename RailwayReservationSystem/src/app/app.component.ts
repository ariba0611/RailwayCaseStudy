import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RailwayReservationSystem';

  constructor(private remove:AuthService, private router :Router) { }

  ngOnInit(): void {
   
   
  }
  
   LogOut(){
     this.remove.LogOutToken();
     this.router.navigateByUrl("/login-page");
    }

    
}
