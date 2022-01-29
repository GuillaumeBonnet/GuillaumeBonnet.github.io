import { AvailableTechIcons } from './app/tech-icon/tech-icon.component';

type Project = {
  title: string;
  description: string;
  techIcons: AvailableTechIcons[];
  githubUrl: string;
  urlFragment: string;
};

const projects: { [key: string]: Project } = {
  'meta-movie': {
    title: 'MetaMovie',
    description:
      'A browser plugin for Chrome that gives you facts on the form of text bubbles in Netflix videos',
    techIcons: ['vue', 'typescript', 'nodejs'],
    githubUrl: 'https://github.com/GuillaumeBonnet/MetaMovie-Plugin',
    urlFragment: '/github/meta-movie',
  },
  'freezer-practice': {
    title: 'Freezer practice app',
    description: 'A website for mobile that displays freezer and aliments',
    techIcons: ['angular', 'java', 'spring'],
    githubUrl: 'https://github.com/GuillaumeBonnet/freezerTracker',
    urlFragment: '/github/freezer-practice',
  },
  'personal-site': {
    title: 'This personnal site',
    description: 'A responsive site that showcases various hobby projects',
    techIcons: ['angular'],
    githubUrl: 'https://github.com/GuillaumeBonnet', //TODO
    urlFragment: '/github/personal-site',
  },
  'workspace-preference': {
    title: 'WorkSpace preference',
    description:
      'Scripts, tools and configurations to set-up my developer environment quickly',
    techIcons: ['vscode'],
    githubUrl: 'https://github.com/GuillaumeBonnet/WorkSpace-Preferences',
    urlFragment: '/github/workspace-preference',
  },
};

export { projects };
