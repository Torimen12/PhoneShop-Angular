import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/interface/news';

@Component({
  selector: 'app-phone-news',
  templateUrl: './phone-news.component.html',
  styleUrls: ['./phone-news.component.scss']
})
export class PhoneNewsComponent implements OnInit {

  news : News[] = [
    {
      img:"../../../assets/img/news1.jpg",
      title:"Styling White Shirts After A Cool Day",
      name:"By Admin",
      p:"Lorem ipsum dolor sit amet consectetur adipisicing"+
      "elit. Illo praesentium, numquam non provident rem sed minus natus "+
      "unde vel modi!"
    },
    {
      img:"../../../assets/img/news2.jpg",
      title:"Styling White Shirts After A Cool Day",
      name:"By Admin",
      p:"Lorem ipsum dolor sit amet consectetur adipisicing"+
      "elit. Illo praesentium, numquam non provident rem sed minus natus "+
      "unde vel modi!"
    },
    {
      img:"../../../assets/img/news3.jpg",
      title:"Styling White Shirts After A Cool Day",
      name:"By Admin",
      p:"Lorem ipsum dolor sit amet consectetur adipisicing"+
      "elit. Illo praesentium, numquam non provident rem sed minus natus "+
      "unde vel modi!"
    },
    {
      img:"../../../assets/img/news4.jpg",
      title:"Styling White Shirts After A Cool Day",
      name:"By Admin",
      p:"Lorem ipsum dolor sit amet consectetur adipisicing"+
      "elit. Illo praesentium, numquam non provident rem sed minus natus "+
      "unde vel modi!"
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
