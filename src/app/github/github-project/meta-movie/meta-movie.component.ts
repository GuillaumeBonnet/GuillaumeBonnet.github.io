import { Component, OnInit } from '@angular/core';
import { projects } from 'src/projectData';
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
  projects = projects;

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
      secondaryText: $localize`(typing language)`,
    },
    {
      iconName: 'materialdesign',
      text: 'Material Design web components with a custom theme',
      secondaryText: $localize`(components)`,
    },
    {
      iconName: 'tailwind',
      text: 'tailwindcss',
      secondaryText: $localize`(css framework)`,
    },
  ];
  backEndLines: Line[] = [
    {
      iconName: 'nodejs',
      text: 'nodejs',
      secondaryText: $localize`(language)`,
    },
    {
      iconName: 'typescript',
      text: 'Typescript',
      secondaryText: $localize`(typing language)`,
    },
    {
      iconName: 'expressjs',
      text: 'express',
      secondaryText: $localize`(web framework)`,
    },
    {
      iconName: 'prisma',
      text: 'Prisma',
      secondaryText: $localize`(database ORM)`,
    },
    {
      iconName: 'postgresql',
      text: 'PostgreSQL',
      secondaryText: $localize`(database)`,
    },
    {
      iconName: 'heroku',
      text: 'HEROKU',
      secondaryText: $localize`(Hosting server platform)`,
    },
  ];
}
