import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getUserDetailsFromLocalStorage(){
    let userData:any;
     userData = localStorage.getItem("userDetails");
    if(userData){
       userData = JSON.parse(userData);            // we can get the object using parse
    }
    return userData;
  }
}
    

