export class Reservation {

    Res_Id: number = 0;
    Res_Name: string = '';
    Res_Gender: string = '';
    User_Id: number = 0;
    QuotaType: string = '';
    Res_Date: string = '';
    Train_Id: number = 0;
   
}

export class TrainDetails {
    Train_Id: number = 0;
    TrainName: string = '';
    SourceStation: string = '';
    DestinationStation: string = '';
    Fare: number = 0;
    ArrivalTime: string = '';
    DepartureTime: string = '';
    TotalSeats: number = 0
}