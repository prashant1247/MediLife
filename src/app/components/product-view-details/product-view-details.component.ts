import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpServiceService } from 'src/app/core/service/http-service.service';

@Component({
  selector: 'app-product-view-details',
  templateUrl: './product-view-details.component.html',
  styleUrls: ['./product-view-details.component.scss']
})
export class ProductViewDetailsComponent implements OnInit{

  selectedDrugCode!:string | null ;
  productDetails:any;

  constructor(private route:ActivatedRoute,private http:HttpServiceService){
 this.selectedDrugCode = this.route.snapshot.paramMap.get('drugCode');
  }


  ngOnInit(): void {
    this.getproductDetailsByCategoryId();
  }

  getproductDetailsByCategoryId(){
    if(this.selectedDrugCode != null){
      const endpoint = "top-deals?drugCode="+ this.selectedDrugCode;
      this.http.getDataFromServer(endpoint).subscribe((el:any)=>{
        if(el && el.length>0){
          this.productDetails = el[0];
          console.log("product-details" ,this.productDetails)
        }
      },
      error =>{
        console.log(error);
      });
    }
  }
  
}
