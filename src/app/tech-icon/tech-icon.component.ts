import { Component, Input, OnInit } from '@angular/core';

type IconDef = {
  longPath: string;
  alt: string;
  title: string;
  url: string;
};

const iconMap = {
  vue: {
    longPath: '/src/assets/vuejs.icon.svg', //longPath are used because my editor auto-completes it
    alt: 'vuejs icon',
    title: 'vuejs',
    url: 'https://vuejs.org/',
  },
  angular: {
    longPath: '/src/assets/angular.icon.svg',
    alt: 'angular icon',
    title: 'angular',
    url: 'https://angular.io/',
  },
  materialdesign: {
    longPath: '/src/assets/material-design.icon.png',
    alt: 'Material Design Icon',
    title: 'Material Design',
    url: 'https://material.io/components?platform=web',
  },
  tailwind: {
    longPath: '/src/assets/tailwindcss.icon.png',
    alt: 'tailwindcss Icon',
    title: 'tailwindcss',
    url: 'https://tailwindcss.com/',
  },
  java: {
    longPath: '/src/assets/java.icon.svg',
    alt: 'java icon',
    title: 'java',
    url: 'https://www.oracle.com/java/',
  },
  nodejs: {
    longPath: '/src/assets/nodejs.icon.png',
    alt: 'nodejs icon',
    title: 'nodejs',
    url: 'https://nodejs.org/en/',
  },
  heroku: {
    longPath: '/src/assets/heroku.icon.ico',
    alt: 'HEROKU icon',
    title: 'HEROKU',
    url: 'https://www.heroku.com/home',
  },
  expressjs: {
    longPath: '/src/assets/expressjs.icon.ico',
    alt: 'express icon',
    title: 'express',
    url: 'https://expressjs.com/',
  },
  typescript: {
    longPath: '/src/assets/typescript.icon.png',
    alt: 'typescript icon',
    title: 'typescript',
    url: 'https://www.typescriptlang.org/',
  },
  prisma: {
    longPath: '/src/assets/prisma.icon.png',
    alt: 'Prisma icon',
    title: 'Prisma',
    url: 'https://www.prisma.io/',
  },
  postgresql: {
    longPath: '/src/assets/postgresql.icon.png',
    alt: 'PostgreSQL icon',
    title: 'PostgreSQL',
    url: 'https://www.postgresql.org/',
  },
  spring: {
    longPath: '/src/assets/spring.icon.png',
    alt: 'spring icon',
    title: 'spring',
    url: 'https://spring.io/',
  },
  vscode: {
    longPath: '/src/assets/vscode.icon.png',
    alt: 'VS Code icon',
    title: 'VS Code',
    url: 'https://code.visualstudio.com/',
  },
};

export type AvailableTechIcons = keyof typeof iconMap;

@Component({
  selector: 'app-tech-icon',
  templateUrl: './tech-icon.component.html',
  styleUrls: ['./tech-icon.component.scss'],
})
export class TechIconComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    if (!this.name) {
      this.name = 'angular';
    }
    this.iconDefiniton = {
      ...iconMap[this.name],
      path: iconMap[this.name].longPath.split('/src')[1],
    };
  }
  @Input()
  name!: keyof typeof iconMap;

  iconDefiniton!: IconDef & { path: string };
}
