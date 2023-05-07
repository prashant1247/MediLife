import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CoreModule } from './core/core.module';
import { MedicineHomeComponentsComponent } from './components/medicine-home-components/medicine-home-components.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TopDealsComponent } from './components/top-deals/top-deals.component'
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TopDealsByCategoryComponent } from './components/top-deals-by-category/top-deals-by-category.component';
import { ProductViewDetailsComponent } from './components/product-view-details/product-view-details.component';
import { TopDealsHeaderComponent } from './components/top-deals-header/top-deals-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MedicineHomeComponentsComponent,
    TopDealsComponent,
    TopDealsByCategoryComponent,
    ProductViewDetailsComponent,
    TopDealsHeaderComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    FormsModule,
    CarouselModule,

  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
