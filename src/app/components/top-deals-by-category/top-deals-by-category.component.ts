import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { HttpServiceService } from 'src/app/core/service/http-service.service';

@Component({
  selector: 'app-top-deals-by-category',
  templateUrl: './top-deals-by-category.component.html',
  styleUrls: ['./top-deals-by-category.component.scss']
})
export class TopDealsByCategoryComponent implements OnInit{

  topDealsByCategoryData:any=[];

  constructor(private http:HttpServiceService,private cart:CartService){}
  ngOnInit(): void {
   this.getTopDealsByCategory();
    }

  getTopDealsByCategory(){
  this.http.getDataFromServer("top-deals-by-category").subscribe((el:any)=>{
    if(el && el.length>0){
      this.topDealsByCategoryData = el;
    }
  },
  error =>{
    console.log(error);
  })
  }

  addtocart(item:any){
    this.cart.AddItemsToCart(item);

  }

}
