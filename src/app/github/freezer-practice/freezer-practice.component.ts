import { Component, OnInit } from '@angular/core';
import { AvailableTechIcons } from 'src/app/tech-icon/tech-icon.component';
import { projects } from 'src/projectData';

type Line = {
  iconName: AvailableTechIcons;
  text: string;
  secondaryText: string;
};

@Component({
  selector: 'app-freezer-practice',
  templateUrl: './freezer-practice.component.html',
  styleUrls: ['./freezer-practice.component.scss'],
})
export class FreezerPracticeComponent implements OnInit {
  projects = projects;
  constructor() {}

  ngOnInit(): void {}

  frontEndLines: Line[] = [
    {
      iconName: 'angular',
      text: 'Angular',
      secondaryText: '(framework)',
    },
    {
      iconName: 'typescript',
      text: 'Typescript',
      secondaryText: $localize`:@@typing-language:(typing language)`,
    },
    {
      iconName: 'sass',
      text: 'Sass',
      secondaryText: $localize`:@@css-preprocessor:(css preprocessor)`,
    },
    {
      iconName: 'materialdesign',
      text: 'Material Design',
      secondaryText: $localize`:@@components:(components)`,
    },
  ];
  backEndLines: Line[] = [
    {
      iconName: 'java',
      text: 'Java',
      secondaryText: $localize`:@@language:(language)`,
    },
    {
      iconName: 'spring',
      text: 'Spring',
      secondaryText: $localize`:@@framework-back-end:(Framework back-end)`,
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
