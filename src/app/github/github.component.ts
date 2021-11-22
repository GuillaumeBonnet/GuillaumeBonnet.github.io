import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { AvailableTechIcons } from '../tech-icon/tech-icon.component';
type Project = {
  title: string;
  description: string;
  techIcons: AvailableTechIcons[];
  githubUrl: string;
};
@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss'],
})
export class GithubComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  faGithub = faGithub;

  projectClicked(projectTitle: string) {
    console.log('gboDebug:[projectTitle]', projectTitle);
  }

  projects: Project[] = [
    {
      title: 'MetaMovie',
      description:
        'A browser plugin for Netflix that gives you facts on the form of text bubbles',
      techIcons: ['vue', 'typescript', 'nodejs'],
      githubUrl: 'https://github.com/GuillaumeBonnet/MetaMovie-Plugin',
    },
    {
      title: 'Freezer practice app',
      description: 'A website for mobile that displays freezer and aliments',
      techIcons: ['angular', 'java', 'spring'],
      githubUrl: 'https://github.com/GuillaumeBonnet/freezerTracker',
    },
    {
      title: 'This personnal site',
      description: 'A responsive site that showcases various hobby projects',
      techIcons: ['angular'],
      githubUrl: 'https://github.com/GuillaumeBonnet', //TODO
    },
    {
      title: 'WorkSpace preference',
      description:
        'Scripts, tools and configurations to set-up my developer environment quickly',
      techIcons: ['vscode'],
      githubUrl: 'https://github.com/GuillaumeBonnet/WorkSpace-Preferences',
    },
  ];
}
