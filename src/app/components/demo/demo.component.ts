import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  country: string;
  vegetables;

  constructor() {
   }

  ngOnInit() {
    this.country = 'India';
    this.vegetables = [
      {name: 'Tomato', price: 24},
      {name: 'Potato', price: 30},
      {name: 'Bottle Gourd', price: 15},
      {name: 'Brinjal', price: 20},
      {name: 'Radish', price: 18}
    ];
  }

}
