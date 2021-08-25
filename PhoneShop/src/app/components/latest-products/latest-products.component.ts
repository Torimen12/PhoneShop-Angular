import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product';

@Component({
  selector: 'app-latest-products',
  templateUrl: './latest-products.component.html',
  styleUrls: ['./latest-products.component.scss']
})
export class LatestProductsComponent implements OnInit {
  showCustomArrows!: boolean;
  productsList : Product[] = [
    {
        id:1,
        name: "Apple iPhone X",
        trending: "1",
        special: "1",
        feature: "1",
        img: "../../../assets/img/products/iPhone/iphone1.jpeg",
        cost: 550
    },
    {
        id:2,
        name: "Apple iPhone X5",
        trending: "0",
        special: "0",
        feature: "1",
        img: "../../../assets/img/products/iPhone/iphone2.jpeg",
        cost: 550
    },
    {
        id:3,
        name: "Apple iPhone X2",
        trending: "0",
        special: "1",
        feature: "1",
        img: "../../../assets/img/products/iPhone/iphone3.jpeg",
        cost: 550
    },
    {
        id:4,
        name: "Apple iPhone X1",
        trending: "1",
        special: "1",
        feature: "0",
        img: "../../../assets/img/products/iPhone/iphone4.jpeg",
        cost:550
    },
    {
        id:5,
        name: "Apple iPhone X0",
        trending: "0",
        special: "0",
        feature: "1",
        img: "../../../assets/img/products/iPhone/iphone5.jpeg",
        cost: 550
    },
    {
      id:6,
        name: "Apple iPhone X4",
        trending: "0",
        special: "1",
        feature: "1",
        img: "../../../assets/img/products/iPhone/iphone6.jpeg",
        cost: 550
    },
    {
      id:7,
        name: "Samsung 1",
        trending: "0",
        special: "0",
        feature: "1",
        img: "../../../assets/img/products/samsung/samsung1.jpeg",
        cost: 550
    },
    {
      id:8,
        name: "Samsung 2",
        trending: "1",
        special: "1",
        feature: "1",
        img: "../../../assets/img/products/samsung/samsung2.jpeg",
        cost: 550
    },
    {
      id:9,
        name: "Samsung 3",
        trending: "0",
        special: "1",
        feature: "0",
        img: "../../../assets/img/products/samsung/samsung3.jpeg",
        cost: 550
    },
    {
      id:10,
        name: "Samsung 4",
        trending: "1",
        special: "0",
        feature: "1",
        img: "../../../assets/img/products/samsung/samsung4.jpeg",
        cost: 550
    },
    {
      id:11,
        name: "Samsung 5",
        trending: "0",
        special: "1",
        feature: "1",
        img: "../../../assets/img/products/samsung/samsung5.jpeg",
        cost: 550
    },
    {
      id:12,
        name: "Samsung 6",
        trending: "0",
        special: "0",
        feature: "0",
        img: "../../../assets/img/products/samsung/samsung6.jpeg",
        cost: 550
    },
    {
      id:13,
        name: "Headphone 1",
        trending: "0",
        special: "1",
        feature: "1",
        img: "../../../assets/img/products/headphone/headphone1.jpeg",
        cost: 550
    },
    {
      id:14,
        name: "Headphone 2",
        trending: "0",
        special: "1",
        feature: "1",
        img: "../../../assets/img/products/headphone/headphone2.jpeg",
        cost: 550
    },
    {
      id:15,
        name: "Headphone 3",
        trending: "0",
        special: "0",
        feature: "1",
        img: "../../../assets/img/products/headphone/headphone3.jpeg",
        cost: 550
    },
    {
      id:16,
        name: "Headphone 4",
        trending: "0",
        special: "0",
        feature: "0",
        img: "../../../assets/img/products/headphone/headphone4.jpeg",
        cost: 550
    },
    {
      id:17,
        name: "Headphone 5",
        trending: "1",
        special: "0",
        feature: "0",
        img: "../../../assets/img/products/headphone/headphone5.jpeg",
        cost: 550
    },
    {
      id:18,
        name: "Headphone 6",
        trending: "0",
        special: "0",
        feature: "0",
        img: "../../../assets/img/products/headphone/headphone6.jpeg",
        cost: 550
    },
    {
      id:19,
        name: "Headphone 7",
        trending: "1",
        special: "0",
        feature: "1",
        img: "../../../assets/img/products/headphone/headphone7.jpeg",
        cost: 550
    },
    {
      id:20,
        name: "Headphone 8",
        trending: "0",
        special: "0",
        feature: "0",
        img: "../../../assets/img/products/headphone/headphone8.jpeg",
        cost: 550
    },
    {
      id:21,
        name: "Headphone 9",
        trending: "1",
        special: "1",
        feature: "1",
        img: "../../../assets/img/products/headphone/headphone9.jpeg",
        cost: 550
    },
    {
      id:22,
        name: "Headphone 10",
        trending: "0",
        special: "1",
        feature: "0",
        img: "../../../assets/img/products/headphone/headphone10.jpeg",
        cost: 550
    },
    {
      id:23,
        name: "Headphone 11",
        trending: "0",
        special: "1",
        feature: "1",
        img: "../../../assets/img/products/headphone/headphone11.jpeg",
        cost: 550
    }
  ];

  latestProducts : Product[] = [];
  constructor() {
    this.showCustomArrows = true; 
  }

  ngOnInit(): void {
    for(let i=this.productsList.length-6;i<this.productsList.length;i++){
      this.latestProducts.push(this.productsList[i]);
    }
    console.log(this.latestProducts)
  }

}
