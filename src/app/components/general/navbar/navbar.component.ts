import { Component, OnInit } from '@angular/core';
// import * as Jdata from './../../../../assets/jsons/navbarLis.json'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  lis = require('./../../../../assets/jsons/navbarLis.json')
  constructor() {
  }

  ngOnInit() {
  }

}
