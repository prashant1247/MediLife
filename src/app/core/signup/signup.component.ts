import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { interval, Subscription } from 'rxjs';
import { HttpServiceService } from '../service/http-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit , OnDestroy {

  signForm!:FormGroup;
  isgetotp:boolean = false;
  otpCounter:number= 0;
  sub!:Subscription;
Generatedotp!:number;
isotpverified:boolean = false;
  
  constructor(private fb:FormBuilder, private http:HttpServiceService){

  }
  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
this.signForm = this.fb.group({
  "userName":['',[Validators.required]],
  "password":['',[Validators.required, Validators.maxLength(10)]],
  "mobileNumber":['',[Validators.required]],
  "isMobNoVerified":[false]
})
  }

  getOtp(){
    this.isgetotp = true;

    this.Generatedotp = Math.floor( 1000 + Math.random() * 9000);
    console.log(this.Generatedotp);

    this.sub = interval(1000).subscribe((el:number)=>{
      this.otpCounter = 60 - el;
      if(this.otpCounter === 0){
        this.sub.unsubscribe();
      }
      console.log(el);
    })
  }

  isincorrectotp:boolean = false;
  Verifyotp(otp:any){

    if(this.Generatedotp == otp){
   this.isotpverified = true;
   this.isgetotp = false;
   this.isincorrectotp = false;
      this.sub.unsubscribe();
      this.signForm.controls["isMobNoVerified"].setValue(true);
 }else{
  this.isincorrectotp = true;
 }
  }

  signUp(){
    console.log(this.signForm.value);
    // const body = this.signForm.value;
    this.http.postDataToServer("users",this.signForm.value).subscribe((el:any)=>{

    })
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
