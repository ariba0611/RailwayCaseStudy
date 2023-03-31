import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  
  
  
  PnrNumber : any = Math.random().toString().slice(2,12);
  transID :  any = Math.random().toString().slice(2,12);
  constructor(private res : ReservationService,private authservice : AuthService){}

    ngOninIt(){
    this.res.getTrainData().subscribe(response =>{
    })
    
  }


}
