import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-trending-products',
  templateUrl: './trending-products.component.html',
  styleUrls: ['./trending-products.component.scss']
})
export class TrendingProductsComponent implements OnInit {

  products : Product[] = [];
  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getProducts().subscribe(data=>{
      this.products= data.filter(prod=>{
        return prod.trending=="1";
      })
    })
  }

}
