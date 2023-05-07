import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../service/auth.service';
import { SharedService } from '../../service/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  actionName:string="SignIn";
  isuserloggedIn:boolean = false;
  userDetails:any;
  cartcounter!:Observable<number>;

  constructor(private auth:AuthService, private shared:SharedService){

  }

  @ViewChild('closeBtn') closeBtn!:ElementRef;

  ngOnInit(): void {

this.cartcounter = this.shared.cartCounterObs;


    let userData = this.auth.getUserDetailsFromLocalStorage();
    if(userData){
      this.isuserloggedIn = true;
      this.userDetails = userData;
    }
  }

  changeAction(action:string){
   this.actionName = action;
  }

  getAction(flag:any){
 if(flag){
  this.closeBtn.nativeElement.click();
  this.isuserloggedIn = true;
  this.userDetails = this.auth.getUserDetailsFromLocalStorage();

 }
  }

}
