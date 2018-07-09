import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  nextEvents =
  [
    {
        'name': 'Escuela de padres',
        'day': '09',
        'month': 'Jul',
        'hour': '16:00'
    },
    {
        'name': 'Día de la familia',
        'day': '15',
        'month': 'Aug',
        'hour': '8:00'
    },
    {
        'name': 'Inicio vacaciones',
        'day': '01',
        'month': 'oct',
        'hour': '00:00'
    },
    {
      'name': 'inicio ciclo-2',
      'day': '15',
      'month': 'nov',
      'hour': '07:00'
    }
]
  mouse = false
  constructor() {
    console.log(this.nextEvents.length)
  }

  ngOnInit() {
  }
  mouseIn() {
    this.mouse = true
  }
  mouseOut() {
    this.mouse = false
  }

}
