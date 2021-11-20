import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss'],
})
export class GithubComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  faGithub = faGithub;
}
