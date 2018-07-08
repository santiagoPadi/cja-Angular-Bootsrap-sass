import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements OnInit {
  url = './../../../../../assets/img/slider/'
  carrouselSRC = [
    `${this.url}slider2.jpg`,
    `${this.url}slider3.jpg`
  ]

  constructor() { }

  ngOnInit() {
  }

}
