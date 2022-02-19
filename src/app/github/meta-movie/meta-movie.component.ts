import { Component, OnInit } from '@angular/core';
import { AvailableTechIcons } from 'src/app/tech-icon/tech-icon.component';
import { projects } from 'src/projectData';
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
      secondaryText: $localize`:@@typing-language:(typing language)`,
    },
    {
      iconName: 'materialdesign',
      text: 'Material Design web components with a custom theme',
      secondaryText: $localize`:@@components:(components)`,
    },
    {
      iconName: 'tailwind',
      text: 'tailwindcss',
      secondaryText: $localize`:@@css-framework:(css framework)`,
    },
  ];
  backEndLines: Line[] = [
    {
      iconName: 'nodejs',
      text: 'nodejs',
      secondaryText: $localize`:@@language:(language)`,
    },
    {
      iconName: 'typescript',
      text: 'Typescript',
      secondaryText: $localize`:@@typing-language:(typing language)`,
    },
    {
      iconName: 'expressjs',
      text: 'express',
      secondaryText: $localize`:@@web-framework:(web framework)`,
    },
    {
      iconName: 'prisma',
      text: 'Prisma',
      secondaryText: $localize`:@@database-orm:(database ORM)`,
    },
    {
      iconName: 'postgresql',
      text: 'PostgreSQL',
      secondaryText: $localize`:@@database:(database)`,
    },
    {
      iconName: 'heroku',
      text: 'HEROKU',
      secondaryText: $localize`:@@hosting-server-platform:(Hosting server platform)`,
    },
  ];
}
