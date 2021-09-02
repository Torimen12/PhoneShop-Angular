import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-special-products',
  templateUrl: './special-products.component.html',
  styleUrls: ['./special-products.component.scss']
})
export class SpecialProductsComponent implements OnInit {

  products : Product[] = [];
  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getProducts().subscribe(data=>{
      this.products= data.filter(prod=>{
        return prod.special=="1";
      })
    })
  }

}
