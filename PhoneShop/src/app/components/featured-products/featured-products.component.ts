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
  /*productsList : Product[] = [
    {
        id:1,
        type: "phone",
        name: "Apple iPhone X",
        trending: "1",
        special: "1",
        feature: "1",
        img: "../../../assets/img/products/iPhone/iphone1.jpeg",
        cost: 550
    },
    {
        id:2,
        type: "phone",
        name: "Apple iPhone X5",
        trending: "0",
        special: "0",
        feature: "1",
        img: "../../../assets/img/products/iPhone/iphone2.jpeg",
        cost: 550
    },
    {
        id:3,
        type: "phone",
        name: "Apple iPhone X2",
        trending: "0",
        special: "1",
        feature: "1",
        img: "../../../assets/img/products/iPhone/iphone3.jpeg",
        cost: 550
    },
    {
        id:4,
        type: "phone",
        name: "Apple iPhone X1",
        trending: "1",
        special: "1",
        feature: "0",
        img: "../../../assets/img/products/iPhone/iphone4.jpeg",
        cost:550
    },
    {
        id:5,
        type: "phone",
        name: "Apple iPhone X0",
        trending: "0",
        special: "0",
        feature: "1",
        img: "../../../assets/img/products/iPhone/iphone5.jpeg",
        cost: 550
    },
    {
      id:6,
      type: "phone",
        name: "Apple iPhone X4",
        trending: "0",
        special: "1",
        feature: "1",
        img: "../../../assets/img/products/iPhone/iphone6.jpeg",
        cost: 550
    },
    {
      id:7,
      type: "phone",
        name: "Samsung 1",
        trending: "0",
        special: "0",
        feature: "1",
        img: "../../../assets/img/products/samsung/samsung1.jpeg",
        cost: 550
    },
    {
      id:8,
      type: "phone",
        name: "Samsung 2",
        trending: "1",
        special: "1",
        feature: "1",
        img: "../../../assets/img/products/samsung/samsung2.jpeg",
        cost: 550
    },
    {
      id:9,
      type: "phone",
        name: "Samsung 3",
        trending: "0",
        special: "1",
        feature: "0",
        img: "../../../assets/img/products/samsung/samsung3.jpeg",
        cost: 550
    },
    {
      id:10,
      type: "phone",
        name: "Samsung 4",
        trending: "1",
        special: "0",
        feature: "1",
        img: "../../../assets/img/products/samsung/samsung4.jpeg",
        cost: 550
    },
    {
      id:11,
      type: "phone",
        name: "Samsung 5",
        trending: "0",
        special: "1",
        feature: "1",
        img: "../../../assets/img/products/samsung/samsung5.jpeg",
        cost: 550
    },
    {
      id:12,
      type: "phone",
        name: "Samsung 6",
        trending: "0",
        special: "0",
        feature: "0",
        img: "../../../assets/img/products/samsung/samsung6.jpeg",
        cost: 550
    },
    {
      id:13,
      type: "headphone",
        name: "Headphone 1",
        trending: "0",
        special: "1",
        feature: "1",
        img: "../../../assets/img/products/headphone/headphone1.jpeg",
        cost: 550
    },
    {
      id:14,
      type: "headphone",
        name: "Headphone 2",
        trending: "0",
        special: "1",
        feature: "1",
        img: "../../../assets/img/products/headphone/headphone2.jpeg",
        cost: 550
    },
    {
      id:15,
      type: "headphone",
        name: "Headphone 3",
        trending: "0",
        special: "0",
        feature: "1",
        img: "../../../assets/img/products/headphone/headphone3.jpeg",
        cost: 550
    },
    {
      id:16,
      type: "headphone",
        name: "Headphone 4",
        trending: "0",
        special: "0",
        feature: "0",
        img: "../../../assets/img/products/headphone/headphone4.jpeg",
        cost: 550
    },
    {
      id:17,
      type: "headphone",
        name: "Headphone 5",
        trending: "1",
        special: "0",
        feature: "0",
        img: "../../../assets/img/products/headphone/headphone5.jpeg",
        cost: 550
    },
    {
      id:18,
      type: "headphone",
        name: "Headphone 6",
        trending: "0",
        special: "0",
        feature: "0",
        img: "../../../assets/img/products/headphone/headphone6.jpeg",
        cost: 550
    },
    {
      id:19,
      type: "headphone",
        name: "Headphone 7",
        trending: "1",
        special: "0",
        feature: "1",
        img: "../../../assets/img/products/headphone/headphone7.jpeg",
        cost: 550
    },
    {
      id:20,
      type: "headphone",
        name: "Headphone 8",
        trending: "0",
        special: "0",
        feature: "0",
        img: "../../../assets/img/products/headphone/headphone8.jpeg",
        cost: 550
    },
    {
      id:21,
      type: "headphone",
        name: "Headphone 9",
        trending: "1",
        special: "1",
        feature: "1",
        img: "../../../assets/img/products/headphone/headphone9.jpeg",
        cost: 550
    },
    {
      id:22,
      type: "headphone",
        name: "Headphone 10",
        trending: "0",
        special: "1",
        feature: "0",
        img: "../../../assets/img/products/headphone/headphone10.jpeg",
        cost: 550
    },
    {
      id:23,
      type: "headphone",
        name: "Headphone 11",
        trending: "0",
        special: "1",
        feature: "1",
        img: "../../../assets/img/products/headphone/headphone11.jpeg",
        cost: 550
    }
  ];  */
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
