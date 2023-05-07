import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpServiceService } from 'src/app/core/service/http-service.service';

@Component({
  selector: 'app-medicine-home-components',
  templateUrl: './medicine-home-components.component.html',
  styleUrls: ['./medicine-home-components.component.scss']
})
export class MedicineHomeComponentsComponent implements OnInit{
  pincode : string = "";
  pincodeDetails:any ;
  displayErrorMessage:boolean = false ;
  showDefaultPinCode : boolean = true ;

  @ViewChild('closeBtn') closeBtn!:ElementRef;

  constructor(private http:HttpServiceService) { }

  ngOnInit(): void {
  }

  VerifyPincode(){
    const endPoint = "pin-code-details?"+"pincode="+this.pincode ;
     this.http.getDataFromServer(endPoint).subscribe((el:any)=>{
      if(el && el.length > 0){
        this.pincodeDetails = el[0];
        this.displayErrorMessage = false ;
        this.showDefaultPinCode = false ;
     
        this.closeBtn.nativeElement.click();
      }else {
         this.displayErrorMessage = true ;
         this.showDefaultPinCode = true ;
      }
     })
  }

}
