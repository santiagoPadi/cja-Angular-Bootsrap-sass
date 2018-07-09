import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  nextEvents = require('./../../../../../assets/jsons/nextEvents.json')
  constructor() {
    console.log(this.nextEvents.length)
  }

  ngOnInit() {
  }

}
