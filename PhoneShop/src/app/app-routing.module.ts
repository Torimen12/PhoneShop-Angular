import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { HeadphoneComponent } from './components/headphone/headphone.component';
import { PhoneComponent } from './components/phone/phone.component';
import { SpecialProductsComponent } from './components/special-products/special-products.component';
import { TrendingProductsComponent } from './components/trending-products/trending-products.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path:'',component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'products', component:ProductsComponent,
    children : [
      {
        path:'', component: AllProductsComponent
      },
      {
        path:'all', component: AllProductsComponent
      },
      {
        path:'trending', component: TrendingProductsComponent
      },
      {
        path:'special', component: SpecialProductsComponent
      },
      {
        path:'phone', component: PhoneComponent
      },
      {
        path:'headphone', component: HeadphoneComponent
      }
    ]
  },
  {
    path: 'cart', component : CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
