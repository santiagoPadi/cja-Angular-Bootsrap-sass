import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manyanetianos',
  templateUrl: './manyanetianos.component.html',
  styleUrls: ['./manyanetianos.component.scss']
})
export class ManyanetianosComponent implements OnInit {
  src = './../../../../../assets/img/linksMayanetianos/'
  links = [
    {
      'image': `${this.src}Sagrada Familia.png`,
      'title': 'Hijos de la Sagrada Familia',
      'link': 'http://www.manyanet.org',
    },
    {
      'image': `${this.src}manyanet.jpg`,
      'title': 'Revista Sagrada Familia',
      'link': 'http://www.lasagradafamilia.net',
    },
    {
      'image': `${this.src}idiomas.png`,
      'title': 'Curso de Idiomas Padre Manyanet',
      'link': 'http://www.idiomas.manyanet.org',
    },
    {
      'image': `${this.src}error.png`,
      'title': 'Colegio Padre Manyanet de Barcelona',
      'link': 'http://www.bcn.manyanet.org',
    },
    {
      'image': `${this.src}begues.jpg`,
      'title': 'Colegio San Luis de Begues',
      'link': 'http://www.begues.manyanet.org',
    },
    {
      'image': `${this.src}molins.jpg`,
      'title': 'Colegio San Miguel Arcángel de Molins de Rei',
      'link': 'http://www.molins.manyanet.org',
    },
    {
      'image': `${this.src}blanes.jpg`,
      'title': 'Colegio Santa María de Blanes',
      'link': 'http://www.blanesmanyanet.org',
    },
    {
      'image': `${this.src}pintela.jpg`,
      'title': 'Colegio Padre Manyanet de Madrid',
      'link': 'https://www.alcobendas.manyanet.org/',
    },
    {
      'image': `${this.src}error.png`,
      'title': 'Colegio Padre Manyanet de Medellín',
      'link': 'http://www.manyanet.edu.co/sitio/',
    },
    {
      'image': `${this.src}error.png`,
      'title': 'Colegio Padre Manyanet de Reus',
      'link': 'http://www.manyanet-reus.net',
    },
    {
      'image': `${this.src}error.png`,
      'title': 'Colegio San Ramón de Penyafort',
      'link': 'http://www.manyanet-vilafranca.org',
    },
    {
      'image': `${this.src}error.png`,
      'title': 'Colegio Padre Manyanet de Bogotá',
      'link': 'http://www.colegiopadremanyanetbogota.edu.co',
    },
    {
      'image': `${this.src}chia.jpg`,
      'title': 'Colegio Padre Manyanet de Chía',
      'link': 'https://www.padremanyanet.edu.co/',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
