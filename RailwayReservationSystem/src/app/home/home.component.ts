import { Component } from '@angular/core';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchText = ''; 
  

  public traindetail: any;
  constructor(private train:ReservationService){}

  ngOnInit(){
  
    this.train.getTrainData().subscribe(response =>{
     this.traindetail = response;
   
     
    })
  }

}
