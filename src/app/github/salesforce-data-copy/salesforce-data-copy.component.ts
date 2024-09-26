import { Component, OnInit } from '@angular/core';
import { AvailableTechIcons } from 'src/app/tech-icon/tech-icon.component';
import { projects } from 'src/projectData';
type Line = {
  iconName: AvailableTechIcons;
  text: string;
  secondaryText: string;
};
@Component({
  selector: 'app-salesforce-data-copy',
  templateUrl: './salesforce-data-copy.component.html',
  styleUrls: ['./salesforce-data-copy.component.scss'],
})
export class SalesforceDataCopyComponent implements OnInit {
  constructor() {}
  projects = projects;

  ngOnInit(): void {}
  technoLines: Line[] = [
    {
      iconName: 'electron',
      text: 'Electron',
      secondaryText: $localize`:@@application-framework:(application framework)`,
    },
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
      iconName: 'quasar',
      text: 'Quasar',
      secondaryText: $localize`:@@component-framework:(component framework)`,
    },
    {
      iconName: 'tailwind',
      text: 'tailwindcss',
      secondaryText: $localize`:@@css-framework:(css framework)`,
    },
  ];
}
