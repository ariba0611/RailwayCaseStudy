import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AuthGuard } from './services/auth.guard';
import { TicketComponent } from './ticket/ticket.component';


var token = localStorage.getItem("AccessToken");
   
const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login-page',component:LoginPageComponent},
  {path:'reservation',component:ReservationComponent,canActivate:[AuthGuard]},
  {path:'ticket',component:TicketComponent,canActivate:[AuthGuard]},
  {path:'**',component:PageNotFoundComponent},
  
 

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
