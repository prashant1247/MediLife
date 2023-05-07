import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  finalOrder:Order = new Order();


  constructor(private cart:CartService, private router:Router){

  }
  ngOnInit(): void {
    let cartItems = this.cart.getProductsDataFromLocalstoarage();
    this.setCartItems(cartItems);
    this.calculateTotalPrice();
    console.log(cartItems);
  }

  setCartItems(cartItems:any){
let productArr:Product[] = [];
cartItems.forEach((el:any) => {
  let productobj = new Product();
  productobj.productName = el.description;
  productobj.brand = el.brand;
  productobj.type = el.type;
  productobj.drugCode = el.drugCode;
  productobj.actualPrice = el.actualPrice;
  productobj.discountedPrice = el.discountedPrice;
  productobj.quantity = 1;
  productobj.productTotalPrice = Number(productobj.discountedPrice) * Number(productobj.quantity);
  productArr.push(productobj); 
});
this.finalOrder.products = productArr ;

  }

  calculateTotalPrice(){
    this.finalOrder.totalAmount = 0 ;
   this.finalOrder.totalDiscount = 10 ;
   this.finalOrder.products.forEach((el:Product)=>{
      this.finalOrder.totalAmount += Number(el.productTotalPrice);
    //  this.finalOrder.totalDiscount += (Nu)
   })
   this.finalOrder.finalAmountToPay = this.finalOrder.totalAmount - this.finalOrder.totalDiscount;
  }
  changeQuantity(index:number,action:string){
    let productItem = this.finalOrder.products[index];
    if(action == 'Increment'){
      productItem.quantity ++ ;
    }else {
      productItem.quantity -- ;
      if(productItem.quantity < 1){
        let res = confirm("Are You Sure");
        if(res){
          this.finalOrder.products.splice(index,1);
        }else {
          productItem.quantity++
        }
      }
    }
    productItem.productTotalPrice = Number(productItem.discountedPrice) * Number(productItem.quantity);
    this.calculateTotalPrice();
  }

  checkout(){
    this.cart.setOrderDetails(this.finalOrder);
    this.router.navigate(['/cart/booking-details'])
  }


}

class Order {
  orderId!:number;
  fullName!:string;
  mobileNo!:number;
  emailId!:string;
  products!:Product[];
  totalAmount!:number;
  totalDiscount!:number;
  finalAmountToPay!:number;
  deliveryType!:string;
}

class Address {
  line1! : string;
  line2!:string;
  city!:string;
  state!:string;
  pincode!:string;
  country!:string;
}


class Product {
  drugCode!:string;
  productName!:string;
  brand!:string;
  actualPrice!:number;
  discountedPrice!:number;
  quantity!:number;
  productTotalPrice!:number;
  type!:string
}
