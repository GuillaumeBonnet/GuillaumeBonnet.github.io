import { AvailableTechIcons } from './app/tech-icon/tech-icon.component';

type Project = {
  title: string;
  description: string;
  techIcons: AvailableTechIcons[];
  githubUrl: string;
  urlFragment: string;
};

const projects: { [key: string]: Project } = {
  'salesforce-data-copy': {
    title: 'salesforce-data-copy',
    description: $localize`:@@description_salesforce-data-copy:Desktop app that clones Salesforce data from one sandbox environment to another by crawling a data graph.`,
    techIcons: ['electron', 'vue', 'quasar', 'typescript'],
    githubUrl: 'https://github.com/GuillaumeBonnet/salesforce-data-copy',
    urlFragment: '/github/salesforce-data-copy',
  },
  'meta-movie': {
    title: 'MetaMovie',
    description: $localize`:@@description_meta-movie:A browser plugin for Chrome that gives you facts on the form of text bubbles in Netflix videos`,
    techIcons: ['vue', 'typescript', 'nodejs'],
    githubUrl: 'https://github.com/GuillaumeBonnet/MetaMovie-Plugin',
    urlFragment: '/github/meta-movie',
  },
  'freezer-practice': {
    title: $localize`:@@title_freezer-practice:Freezer practice app`,
    description: $localize`:@@description_freezer-practice:A website for mobile that displays freezer and aliments`,
    techIcons: ['angular', 'typescript', 'java', 'spring'],
    githubUrl: 'https://github.com/GuillaumeBonnet/freezerTracker',
    urlFragment: '/github/freezer-practice',
  },
  'personal-site': {
    title: $localize`:@@title_personal-site:This personal site`,
    description: $localize`:@@description_personal-site:A responsive site that showcases various hobby projects`,
    techIcons: ['angular', 'typescript', 'tailwind'],
    githubUrl: 'https://github.com/GuillaumeBonnet/GuillaumeBonnet.github.io',
    urlFragment: '/github/personal-site',
  },
  'workspace-preference': {
    title: $localize`:@@title_workspace-preference:WorkSpace preferences`,
    description: $localize`:@@description_workspace-preference:Scripts, tools and configurations to set-up my developer environment quickly`,
    techIcons: ['vscode', 'git', 'powershell'],
    githubUrl: 'https://github.com/GuillaumeBonnet/WorkSpace-Preferences',
    urlFragment: '/github/workspace-preference',
  },
};

export { projects };
