import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxGlideModule } from 'ngx-glide';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { LatestProductsComponent } from './components/latest-products/latest-products.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { PhoneNewsComponent } from './components/phone-news/phone-news.component';
import { LetterComponent } from './components/letter/letter.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './components/product/product.component';
import { FacilityComponent } from './components/facility/facility.component';
import { QuoteComponent } from './components/quote/quote.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    CollectionsComponent,
    LatestProductsComponent,
    FeaturedProductsComponent,
    FacilitiesComponent,
    QuotesComponent,
    PhoneNewsComponent,
    LetterComponent,
    FooterComponent,
    ProductComponent,
    FacilityComponent,
    QuoteComponent,
    NewsComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    NgxGlideModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
