import { Component, OnInit } from '@angular/core';
import { Facility } from 'src/app/interface/facility';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss']
})
export class FacilitiesComponent implements OnInit {

  constructor() { }

  facilities : Facility[] = [
    {
      icon: "fas fa-plane",
      p:"FREE SHIPPING WORLD WIDE"
    },
    {
      icon: "fas fa-credit-card",
      p:"100% MONEY BACK GUARANTEE"
    },
    {
      icon: "far fa-credit-card",
      p:"MANY PAYMENT GATEWAYS"
    },
    {
      icon: "fas fa-headphones",
      p:"24/7 ONLINE SUPPORT"
    }
  ];

  ngOnInit(): void {

  }

}
