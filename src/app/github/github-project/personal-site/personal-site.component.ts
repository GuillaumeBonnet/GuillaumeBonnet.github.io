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
      secondaryText: $localize`:@@framework:(framework)`,
    },
    {
      iconName: 'typescript',
      text: 'Typescript',
      secondaryText: $localize`:@@typing-language:(typing language)`,
    },
    {
      iconName: 'tailwind',
      text: 'tailwind',
      secondaryText: $localize`:@@css-framework:(css framework)`,
    },
    {
      iconName: 'sass',
      text: 'Sass',
      secondaryText: $localize`:@@css-preprocessor:(css preprocessor)`,
    },
    {
      iconName: 'materialdesign',
      text: 'Material Design',
      secondaryText: $localize`:@@components-and-theme:(components and custom theme)`,
    },
  ];
}
