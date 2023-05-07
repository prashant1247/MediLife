import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService  {

  constructor(private http:HttpClient) { }

  baseUrl:string = environment.baseUrl ;

  httpHeaders:HttpHeaders = new HttpHeaders()
                            .set("Content-type","application/json"); 
  

 

   getDataFromServer(endPoint:string){
    const url = this.baseUrl + endPoint ;
    return this.http.get(url,{headers:this.httpHeaders});
   }
 
   getDataFromServerByQueryParams(endPoint:string,httpParams:HttpParams){
  const url = this.baseUrl + endPoint;
  return this.http.get(url,{headers:this.httpHeaders,params:httpParams})
   }

   
   postDataToServer(endPoint:string,data:any){
    const url = this.baseUrl + endPoint ;
    return this.http.post(url,data,{headers:this.httpHeaders});
   }
}
