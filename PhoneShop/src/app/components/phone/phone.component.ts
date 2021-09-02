import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {

  products : Product[] = [];
  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getProducts().subscribe(data=>{
      this.products= data.filter(prod=>{
        return prod.type=="phone";
      })
    })
  }

}
