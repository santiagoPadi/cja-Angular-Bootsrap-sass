import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manyanetianos',
  templateUrl: './manyanetianos.component.html',
  styleUrls: ['./manyanetianos.component.scss']
})
export class ManyanetianosComponent implements OnInit {
  links = [
    {
      'image': './../../../../../assets/img/linksMayanetianos/Sagrada Familia.png',
      'title': 'Hijos de la Sagrada Familia',
      'link': 'www.manyanet.org',
    },
    {
      'image': '',
      'title': 'Revista Sagrada Familia',
      'link': 'www.lasagradafamilia.net',
    },
    {
      'image': '',
      'title': 'ONG Manyanet Solidario',
      'link': 'www.manyanetsolidario.org',
    },
    {
      'image': '',
      'title': 'Curso de Idiomas Padre Manyanet',
      'link': 'www.idiomas.manyanet.org',
    },
    {
      'image': '',
      'title': 'Colegio Padre Manyanet de Barcelona',
      'link': 'www.bcn.manyanet.org',
    },
    {
      'image': '',
      'title': 'Colegio San Luis de Begues',
      'link': 'www.begues.manyanet.org',
    },
    {
      'image': '',
      'title': 'Colegio San Miguel Arcángel de Molins de Rei',
      'link': 'www.molins.manyanet.org',
    },
    {
      'image': '',
      'title': 'Colegio Santa María de Blanes',
      'link': 'www.blanesmanyanet.org',
    },
    {
      'image': '',
      'title': 'Colegio Padre Manyanet de Madrid',
      'link': 'www.manyanet-alcobendas.org',
    },
    {
      'image': '',
      'title': 'Colegio Padre Manyanet de Medellín',
      'link': 'www.manyanet.edu.co/sitio/',
    },
    {
      'image': '',
      'title': 'Colegio Padre Manyanet de Reus',
      'link': 'www.manyanet-reus.net',
    },
    {
      'image': '',
      'title': 'Colegio San Ramón de Penyafort',
      'link': 'www.manyanet-vilafranca.org',
    },
    {
      'image': '',
      'title': 'Colegio Padre Manyanet de Bogotá',
      'link': 'www.colegiopadremanyanetbogota.edu.co',
    },
    {
      'image': '',
      'title': 'Colegio Padre Manyanet de Chía',
      'link': 'www.manyanet-chia.org/',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
