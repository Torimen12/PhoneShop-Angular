import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgxGlideComponent } from 'ngx-glide';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  showCustomArrows!: boolean;
  constructor() { 
    this.showCustomArrows = true; 
  }
  // @ViewChild(NgxGlideComponent, { static: false }) ngxGlide!: NgxGlideComponent;

  // play(): void {
  //   this.ngxGlide.play();
  // }

 

  ngOnInit(): void {
  }

}
