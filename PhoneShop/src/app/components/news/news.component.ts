import { Component, Input, OnInit } from '@angular/core';
import { News } from 'src/app/interface/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  @Input() new! : News;
  constructor() { }

  ngOnInit(): void {
  }

}
