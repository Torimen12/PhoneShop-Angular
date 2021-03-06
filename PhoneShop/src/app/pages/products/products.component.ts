import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products : Product[] = [];
  constructor(private http: HttpService) {

  }

  ngOnInit(): void {
    this.http.getProducts().subscribe(data=>{
      this.products= data;
    })
  }

}
