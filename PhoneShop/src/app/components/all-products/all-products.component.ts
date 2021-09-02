import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  products : Product[] = [];
  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getProducts().subscribe(data=>{
      this.products= data;
    })
  }

}
