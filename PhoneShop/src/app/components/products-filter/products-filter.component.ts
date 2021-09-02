import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.scss']
})
export class ProductsFilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addClassActive(e : any){
    this.removeClassActive();
    if(e.currentTarget.className.search("active")<0){
      e.currentTarget.classList.add("active")
    }
  }

  removeClassActive(){
    let titleE = document.querySelectorAll(".list-group-item-filter");
    for(let i = 0;i<titleE.length;i++){
      if(titleE[i].className.search("active")>=0){
        titleE[i].classList.remove("active");
      }
    }
  }

}
