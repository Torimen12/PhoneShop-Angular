import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-headphone',
  templateUrl: './headphone.component.html',
  styleUrls: ['./headphone.component.scss']
})
export class HeadphoneComponent implements OnInit {

  products : Product[] = [];
  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getProducts().subscribe(data=>{
      this.products= data.filter(prod=>{
        return prod.type=="headphone";
      })
    })
  }

}
