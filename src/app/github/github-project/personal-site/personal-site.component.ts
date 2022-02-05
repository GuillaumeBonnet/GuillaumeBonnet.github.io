import { Component, OnInit } from '@angular/core';
import { AvailableTechIcons } from 'src/app/tech-icon/tech-icon.component';
import { projects } from 'src/projectData';

type Line = {
  iconName: AvailableTechIcons;
  text: string;
  secondaryText: string;
};

@Component({
  selector: 'app-personal-site',
  templateUrl: './personal-site.component.html',
  styleUrls: ['./personal-site.component.scss'],
})
export class PersonalSiteComponent implements OnInit {
  constructor() {}
  projects = projects;

  ngOnInit(): void {}

  frontEndLines: Line[] = [
    {
      iconName: 'angular',
      text: 'Angular',
      secondaryText: $localize`(framework)`,
    },
    {
      iconName: 'typescript',
      text: 'Typescript',
      secondaryText: $localize`(typing language)`,
    },
    {
      iconName: 'tailwind',
      text: 'tailwind',
      secondaryText: $localize`(css framework)`,
    },
    {
      iconName: 'sass',
      text: 'Sass',
      secondaryText: $localize`(css preprocessor)`,
    },
    {
      iconName: 'materialdesign',
      text: 'Material Design',
      secondaryText: $localize`(components and custom theme)`,
    },
  ];
}
