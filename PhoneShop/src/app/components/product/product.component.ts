import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() prod!: Product;

  constructor() {}

  ngOnInit(): void {
  }


}
