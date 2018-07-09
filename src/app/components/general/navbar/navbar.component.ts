import { Component, OnInit } from '@angular/core';
import { url } from 'inspector';

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
