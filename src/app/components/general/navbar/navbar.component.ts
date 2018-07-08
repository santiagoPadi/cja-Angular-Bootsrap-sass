import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
 lis = [
   {
     'routerLink': 'home',
    'name': 'Inicio'},
   {
     'routerLink': 'institute',
     'name': 'Institución'},
   {
     'routerLink': 'ingreso',
     'name': 'Ingreso CJA'},
   {
     'routerLink': 'calendar',
     'name': 'Calendario'},
   {
     'routerLink': 'contact',
     'name': 'Contactenos'}
 ]
  constructor() {
  }

  ngOnInit() {
  }

}
