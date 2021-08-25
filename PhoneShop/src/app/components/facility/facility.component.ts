import { Component, Input, OnInit } from '@angular/core';
import { Facility } from 'src/app/interface/facility';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.scss']
})
export class FacilityComponent implements OnInit {

  @Input() facility! : Facility;
  constructor() { }

  ngOnInit(): void {
  }

}
