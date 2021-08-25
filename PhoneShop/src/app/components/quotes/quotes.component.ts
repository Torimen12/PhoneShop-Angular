import { Quote } from '../../interface/quote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  quotes : Quote[] = [
    {
      img:"../../../assets/img/profile1.jpg",
      p:"Lorem, ipsum dolor sit amet consectetur"+
      " adipisicing elit. Recusandae fuga hic nesciunt"+
      " tempore quibusdam consequatur eligendi unde officia ex quae."+
      "ipsum dolor sit amet consectetur adipisicingelit. Recusandae fuga hic"+
      " nesciunt tempore quibusdam consequatur eligendi unde officia ex quae.",
      name: "John Smith",
      job: "Founder at Apple"
    },
    {
      img:"../../../assets/img/profile2.jpg",
      p:"Lorem, ipsum dolor sit amet consectetur"+
      " adipisicing elit. Recusandae fuga hic nesciunt"+
      " tempore quibusdam consequatur eligendi unde officia ex quae."+
      "ipsum dolor sit amet consectetur adipisicingelit. Recusandae fuga hic"+
      " nesciunt tempore quibusdam consequatur eligendi unde officia ex quae.",
      name: "John Smith",
      job: "Founder at Apple"
    },
    {
      img:"../../../assets/img/profile3.jpg",
      p:"Lorem, ipsum dolor sit amet consectetur"+
      " adipisicing elit. Recusandae fuga hic nesciunt"+
      " tempore quibusdam consequatur eligendi unde officia ex quae."+
      "ipsum dolor sit amet consectetur adipisicingelit. Recusandae fuga hic"+
      " nesciunt tempore quibusdam consequatur eligendi unde officia ex quae.",
      name: "John Smith",
      job: "Founder at Apple"
    },
    {
      img:"../../../assets/img/profile4.jpg",
      p:"Lorem, ipsum dolor sit amet consectetur"+
      " adipisicing elit. Recusandae fuga hic nesciunt"+
      " tempore quibusdam consequatur eligendi unde officia ex quae."+
      "ipsum dolor sit amet consectetur adipisicingelit. Recusandae fuga hic"+
      " nesciunt tempore quibusdam consequatur eligendi unde officia ex quae.",
      name: "John Smith",
      job: "Founder at Apple"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
