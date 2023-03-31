import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation, TrainDetails } from './reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http:HttpClient) { }
 
  private url = "http://localhost:5001/api/";
  listres:Reservation[]=[];
  listtrain:TrainDetails[]=[];
  resData:Reservation = new Reservation(); 

   
  reservationUser(resuser: Array<any>){
    return this.http.post(this.url+"Reservation",
    {
      Res_Id:0,
      Res_Name:resuser[0],
      Res_Gender:resuser[1],
      User_Id: resuser[2],
      QuotaType:resuser[3],
      Res_Date:resuser[4],
      Train_Id:resuser[5]
    }
    
    ,{
      responseType: 'text'
    });
  }


  saveRes()
  {
    return this.http.post(this.url+"Reservation",this.resData);
  }
  updateRes()
  {
    return this.http.put(`${this.url+"Reservation"}/${this.resData.Res_Id}` ,this.resData);
  }
  getRes()
  {
    return this.http.get(this.url+"Reservation");
  }
  getTrainData(){
  
    return this.http.get(this.url+"TrainDetails");
  }
  deleteRes(id:number)
  {
    return this.http.delete(`${this.url+"Reservation"}/${id}`);
  }


  //Ticket
  postTicket(ticketuser: Array<any>){
    return this.http.post(this.url+"Ticket",
    {
      Ticket_Id:0,
      Res_Id:ticketuser[0],
      Amount:ticketuser[1],
      PNR_NO: ticketuser[2],
      Seat_No:ticketuser[3],
      Transaction_Id:ticketuser[4],
      DateOfJourney:ticketuser[5]
    }
    
    ,{
      responseType: 'text'
    });
  }
}
