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
    alt: $localize`:@@icon-vuejs:vuejs icon`,
    title: 'vuejs',
    url: 'https://vuejs.org/',
  },
  angular: {
    longPath: '/src/assets/angular.icon.svg',
    alt: $localize`:@@icon-angular:angular icon`,
    title: 'angular',
    url: 'https://angular.io/',
  },
  materialdesign: {
    longPath: '/src/assets/material-design.icon.png',
    alt: $localize`:@@icon-material:Material Design icon`,
    title: 'Material Design',
    url: 'https://material.io/components?platform=web',
  },
  tailwind: {
    longPath: '/src/assets/tailwindcss.icon.png',
    alt: $localize`:@@icon-tailwindcss:tailwindcss icon`,
    title: 'tailwindcss',
    url: 'https://tailwindcss.com/',
  },
  java: {
    longPath: '/src/assets/java.icon.svg',
    alt: $localize`:@@icon-java:java icon`,
    title: 'java',
    url: 'https://www.oracle.com/java/',
  },
  nodejs: {
    longPath: '/src/assets/nodejs.icon.png',
    alt: $localize`:@@icon-nodejs:nodejs icon`,
    title: 'nodejs',
    url: 'https://nodejs.org/en/',
  },
  heroku: {
    longPath: '/src/assets/heroku.icon.ico',
    alt: $localize`:@@icon-HEROKU:HEROKU icon`,
    title: 'HEROKU',
    url: 'https://www.heroku.com/home',
  },
  expressjs: {
    longPath: '/src/assets/expressjs.icon.ico',
    alt: $localize`:@@icon-expressjs:expressjs icon`,
    title: 'expressjs',
    url: 'https://expressjs.com/',
  },
  typescript: {
    longPath: '/src/assets/typescript.icon.png',
    alt: $localize`:@@icon-typescript:typescript icon`,
    title: 'typescript',
    url: 'https://www.typescriptlang.org/',
  },
  prisma: {
    longPath: '/src/assets/prisma.icon.png',
    alt: $localize`:@@icon-Prisma:Prisma icon`,
    title: 'Prisma',
    url: 'https://www.prisma.io/',
  },
  postgresql: {
    longPath: '/src/assets/postgresql.icon.png',
    alt: $localize`:@@icon-PostgreSQL:PostgreSQL icon`,
    title: 'PostgreSQL',
    url: 'https://www.postgresql.org/',
  },
  spring: {
    longPath: '/src/assets/spring.icon.png',
    alt: $localize`:@@icon-spring:spring icon`,
    title: 'spring',
    url: 'https://spring.io/',
  },
  sass: {
    longPath: '/src/assets/sass.icon.png',
    alt: $localize`:@@icon-sass:sass icon`,
    title: 'sass',
    url: 'https://sass-lang.com/',
  },
  vscode: {
    longPath: '/src/assets/vscode.icon.png',
    alt: $localize`:@@icon-VS-Code:VS Code icon`,
    title: 'VS Code',
    url: 'https://code.visualstudio.com/',
  },
  git: {
    longPath: '/src/assets/git.icon.png',
    alt: $localize`:@@icon-git:Git icon`,
    title: 'Git',
    url: 'https://git-scm.com/',
  },
  powershell: {
    longPath: '/src/assets/powershell.icon.png',
    alt: $localize`:@@icon-powershell:PowerShell icon`,
    title: 'PowerShell',
    url: 'https://docs.microsoft.com/en-us/powershell/scripting/overview?view=powershell-7.2',
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
      path: iconMap[this.name].longPath.split('/src/')[1],
      // leveraging auto completion of vscode to fill .longPath attribute
    };
  }
  @Input()
  name!: keyof typeof iconMap;

  iconDefiniton!: IconDef & { path: string };
}
