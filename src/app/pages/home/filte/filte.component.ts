import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filte',
  templateUrl: './filte.component.html',
  styleUrls: ['./filte.component.scss']
})
export class FilteComponent implements OnInit {

  selectedLevels :string[] = [];
  selectedTime :string[] = [];
  selectedRates  :string[]  = ['rate1'  , 'rate2'];
  priceRange:number[]= [20,80]

  constructor() { }

  ngOnInit(): void {
  }

}
