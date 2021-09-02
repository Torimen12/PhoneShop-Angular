import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs/operators';
import { Product } from 'src/app/interface/product';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent implements OnInit {
  products : Product[] = [];
  productsList : Product[]= [];
  trendingProducts: Product [] = [];
  specialProducts: Product [] = [];
  featureProducts: Product[ ] = [];
  constructor( private httpService : HttpService) { }

  ngOnInit(): void {
    this.httpService.getProducts().subscribe(data=>{
      this.products = data;
      this.productsList = this.products;
      this.featureProducts = this.products.filter(prod=>{
        return prod.feature=="1";
      })
      this.trendingProducts = this.products.filter(prod=>{
        return prod.trending=="1";
      })
      this.specialProducts = this.products.filter(prod=>{
        return prod.special=="1";
      })
    })
  }

  AllProducts(e : any){
    this.productsList = this.products;
    this.removeClassActive();
    if(e.currentTarget.className.search("active")<0){
      e.currentTarget.classList.add("active")
    }
  }

  TrendingProducts(e : any){
    this.productsList= this.trendingProducts;
    this.removeClassActive();
    if(e.currentTarget.className.search("active")<0){
      e.currentTarget.classList.add("active")
    }
  }

  SpecialProducts(e : any){
    this.productsList = this.specialProducts;
    this.removeClassActive();
    if(e.currentTarget.className.search("active")<0){
      e.currentTarget.classList.add("active")
    }
  }

  FeatureProducts(e : any){
    this.productsList = this.featureProducts;
    this.removeClassActive();
    if(e.currentTarget.className.search("active")<0){
      e.currentTarget.classList.add("active")
    }
  }
  removeClassActive(){
    let titleE = document.querySelectorAll(".title");
    for(let i = 0;i<titleE.length;i++){
      if(titleE[i].className.search("active")>=0){
        titleE[i].classList.remove("active");
      }
    }
  }
}
