import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { projects } from 'src/projectData';
@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss'],
})
export class GithubComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  faGithub = faGithub;
  projects = Object.values(projects);
}
