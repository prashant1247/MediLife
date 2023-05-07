import { Injectable } from '@angular/core';
import { SharedService } from '../core/service/shared.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private orderObj:any;

  constructor(private shared:SharedService) { }

  AddItemsToCart(item:any){
    let cartItems:any = this.getProductsDataFromLocalstoarage();
    cartItems.push(item);
    localStorage.setItem("cartItems",JSON.stringify(cartItems));
    this.shared.emitItem(cartItems.length);
  }

  
 getProductsDataFromLocalstoarage(){
  let items = localStorage.getItem("cartItems");
 
  if(items){
    items = JSON.parse(items);
    return items;
  }else{
    return [];
  }
}

setOrderDetails(order:any){
  this.orderObj  = order ;

}

getOrderDetails(){
  return this.orderObj ;
}

clearProductsFromLocalStorage(){
  localStorage.removeItem("cartItems")
}
}
