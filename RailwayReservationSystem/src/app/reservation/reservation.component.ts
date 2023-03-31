import { Component, ViewChild } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ReservationService } from '../services/reservation.service';



@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  public traindetail : any;
  constructor(private train:ReservationService,private authservice: AuthService, private router : Router ){}
  ngOnInit(){
    debugger
    this.train.getTrainData().subscribe(response =>{
     this.traindetail = response;
    })
  }
 
  userid = this.authservice.currentUserInfo.value.id;
  
 
  reservationForm = new FormGroup({

    Res_Name: new FormControl('', [Validators.required]),
    Res_Gender: new FormControl('', [Validators.required]),
    User_Id: new FormControl('1', [Validators.required]),
    QuotaType:new FormControl('', [Validators.required]),
    Res_Date:new FormControl('', [Validators.required]),
    Train_Id:new FormControl('1', [Validators.required])
   
  });
  
  handleSubmit(){
    console.log(this.reservationForm.value);
    this.train.reservationUser([
      this.reservationForm.value.Res_Name,
      this.reservationForm.value.Res_Gender,
      this.reservationForm.value.User_Id,
      this.reservationForm.value.QuotaType,
      this.reservationForm.value.Res_Date,
      this.reservationForm.value.Train_Id,

     ]).subscribe(response =>{
      if(response == 'Success'){
        
       
      }
      else if (response == ' AlreadyExist'){
   

      }
      else{
       
      }
    })
  }

  get f() {
    return this.reservationForm.controls;
  }


  //Payment

  
  options = {
    "key": "rzp_test_aJVAJtaSskH7US", 
    "amount":  500 * 100, 
    "currency": "INR",
    "name": "Cg Railway Booking",
    "description": "Test Transaction",
    "image": "https://www.citypng.com/public/uploads/preview/hd-train-white-round-icon-sign-png-116372211668z1zktr9lb.png",
    "order_id": "", 
    "handler": (response : any)=> {
      console.log(response);
      this.router.navigateByUrl('ticket');
     },
    
    "prefill": {
        "name": "", 
        "email": "",
        "contact": ""
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3e293c"
    }
};

Pay(){
  
  let rzp1 = new this.authservice.nativeWindow.Razorpay(this.options);
  rzp1.open();
  
 
  
}
 
 /* TodayDate = "";
 ReservationForm:FormGroup;
 list:any;
  toast: any;
 
  constructor(public service: ReservationService, public fb :FormBuilder,public userservice: AuthService , 
    private resservice : ReservationService, private router : Router
   // private toastr: ToastrService
    ) {
      
      this.ReservationForm = this.fb.group({
        name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
        gender:new FormControl('', [Validators.required]),
        sourcestation: new FormControl('',[Validators.required]),
        destinationstation: new FormControl('',[Validators.required]),
        quota: new FormControl('',[Validators.required]),
        dateofjourney: new FormControl('',[Validators.required])
        
      })  
    };
    userid = this.userservice.currentUserInfo.value.id;

    ngOnInit(): void {
 
      const localdata = localStorage.getItem('ResList');
      if(localdata !=null){
        this.list = JSON.parse(localdata);
      }



      this.resservice.getTrainDetails().subscribe(data=> {
        this.resservice.listtrain = data;
      console.log(this.userid)
      });
    }

    AddItem(){
      this.list.push(this.ReservationForm.value);
      localStorage.setItem('ResList',JSON.stringify(this.list))
     
    }
    reset(){
      this.ReservationForm.reset();

    }

    remove(element: any){
      var res = confirm("Are you sure you want to remove this item")
      if(res == true){
      this.list.forEach((value: any,index: any) => {
        if(value == element)
        this.list.splice(index,1); });
    }}

    //Db

    insertRes()
    {
  
        this.resservice.saveRes();
    }
    resetForm(myform:NgForm)
    {
      myform.form.reset(myform.value);
      this.resservice.resData= new Reservation();
    
    }
    refereshData()
    {
      this.resservice.getTrainDetails().subscribe(res=>{
        this.resservice.listtrain=res;
      });
    }

  
    Submit(form:NgForm){
      console.log(this.ReservationForm.value);
      if (this.service.resData.Res_Id == 0)
      this.insertRecord(form);
    
    }
  insertRecord(form: any) {
    throw new Error('Method not implemented.');
  }
    get f() {
      return this.ReservationForm.controls;
    }
   */

  }
  
 

