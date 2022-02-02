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
      secondaryText: '(typing language)',
    },
    {
      iconName: 'sass',
      text: 'Sass',
      secondaryText: '(css preprocessor)',
    },
    {
      iconName: 'materialdesign',
      text: 'Material Design',
      secondaryText: '(components)',
    },
  ];
  backEndLines: Line[] = [
    {
      iconName: 'java',
      text: 'Java',
      secondaryText: '(language)',
    },
    {
      iconName: 'spring',
      text: 'Spring',
      secondaryText: '(Framework back-end)',
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
