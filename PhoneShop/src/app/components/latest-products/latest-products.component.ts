import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxGlideComponent } from 'ngx-glide';
import { filter } from 'rxjs/operators';
import { Product } from 'src/app/interface/product';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-latest-products',
  templateUrl: './latest-products.component.html',
  styleUrls: ['./latest-products.component.scss']
})
export class LatestProductsComponent implements OnInit {
  @ViewChild('ngxGlide') ngxGlide!: NgxGlideComponent;
  showCustomArrows!: boolean;

  productsList : Product[] =[];

  latestProducts : Product[] = [
    {id:19,
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
  ]
  constructor(private httpService : HttpService) {
    // this.httpService.getProducts().subscribe(data=>{
    //   // this.latestProducts = data;
    // })

    this.showCustomArrows = true; 
  }

  ngOnInit(): void {
  }


}
