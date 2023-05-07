import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MedicineHomeComponentsComponent } from './components/medicine-home-components/medicine-home-components.component';
import { ProductViewDetailsComponent } from './components/product-view-details/product-view-details.component';
import { TopDealsByCategoryComponent } from './components/top-deals-by-category/top-deals-by-category.component';
import { PagenotfoundComponent } from './core/components/pagenotfound/pagenotfound.component';


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"medicine-home",component:MedicineHomeComponentsComponent},
  {path:'top-deals-by-category',component:TopDealsByCategoryComponent},
  {path:'view-product-details/:drugCode',component:ProductViewDetailsComponent},
  {path:"",redirectTo:"/home",pathMatch:'full'},
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
