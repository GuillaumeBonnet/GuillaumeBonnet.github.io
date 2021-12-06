import { Component, OnInit } from '@angular/core';
import { AvailableTechIcons } from '../../../tech-icon/tech-icon.component';
type Line = {
  iconName: AvailableTechIcons;
  text: string;
  secondaryText: string;
};
@Component({
  selector: 'app-meta-movie',
  templateUrl: './meta-movie.component.html',
  styleUrls: ['./meta-movie.component.scss'],
})
export class MetaMovieComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  frontEndLines: Line[] = [
    {
      iconName: 'vue',
      text: 'Vue.js v3',
      secondaryText: '(framework)',
    },
    {
      iconName: 'typescript',
      text: 'Typescript',
      secondaryText: '(typing language)',
    },
    {
      iconName: 'materialdesign',
      text: 'Material Design web components with a custom theme',
      secondaryText: '(components)',
    },
    {
      iconName: 'tailwind',
      text: 'tailwindcss',
      secondaryText: '(style framework)',
    },
  ];
  backEndLines: Line[] = [
    {
      iconName: 'nodejs',
      text: 'nodejs',
      secondaryText: '(language)',
    },
    {
      iconName: 'typescript',
      text: 'Typescript',
      secondaryText: '(typing language)',
    },
    {
      iconName: 'expressjs',
      text: 'express',
      secondaryText: '(web framework)',
    },
    {
      iconName: 'prisma',
      text: 'Prisma',
      secondaryText: '(database ORM)',
    },
    {
      iconName: 'postgresql',
      text: 'PostgreSQL',
      secondaryText: '(database)',
    },
    {
      iconName: 'heroku',
      text: 'HEROKU',
      secondaryText: '(Hosting server platform)',
    },
  ];
}
