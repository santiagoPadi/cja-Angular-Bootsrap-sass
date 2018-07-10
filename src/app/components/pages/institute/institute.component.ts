import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-institute',
  templateUrl: './institute.component.html',
  styleUrls: ['./institute.component.scss']
})
export class InstituteComponent implements OnInit {
  jerarquia = [
    {
      'director': {
          'titulo': 'Director general y representante legal',
          'name': 'P. Alexander Díaz Guevara'
      },
      'pastoral': [
        {
          'titulo': 'Director de pastoral',
          'name': 'P. Héctor Francisco Cruz, SF'
        },
        {
          'titulo': 'Pastoralista',
          'name': 'Hno. Walter Damián Distel, SF'
        }
      ],
      'directores': [
        {
          'titulo': 'Director nivel inicial',
          'name': 'Marcela Reynolds'
        },
        {
          'titulo': 'Director nivel primario',
          'name': 'María Fernanda Sívori'
        },
        {
          'titulo': 'Director nivel secundario',
          'name': 'P. Héctor Francisco Cruz, SF'
        }
      ],
      'vicedirectores': [
        {
          'titulo': 'Vicedirector nivel primario',
          'name': 'María Susana Fernández'
        },
        {
          'titulo': 'Vicedirector nivel secundario',
          'name': 'Prof. María Rita Garza'
        }
      ],
      'secretary': [
        {
          'titulo': 'Secretaría general',
          'name': 'María Julia Massigoge'
        },
        {
          'titulo': 'Secretaría inicial y primario',
          'name': 'Marísa Ethel Alonso'
        },
        {
          'titulo': 'Secretaría nivel secundario',
          'name': 'Prof. Ángel Ignacio García Zurita'
        }
      ],
      'orientacion': [
        {
          'titulo': 'Psicóloga',
          'name': 'Lic. Dina Benavente'
        },
        {
          'titulo': 'Psicopedagoga',
          'name': 'Lic. María Florencia Ambrosius'
        },
        {
          'titulo': 'Orientación Escolar',
          'name': 'Prof. María Cecilia Kristensen'
        },
        {
          'titulo': 'Psicopedagoga',
          'name': 'Lic. María Alejandra Damiani'
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
