import { Component, Input, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-github-project-link',
  templateUrl: './github-project-link.component.html',
  styleUrls: ['./github-project-link.component.scss'],
})
export class GithubProjectLinkComponent implements OnInit {
  faGithub = faGithub;

  constructor() {}

  ngOnInit(): void {
    this.displayedText = this.text || $localize`:@@github-repository:Github repository`;
  }

  @Input()
  url!: string;
  @Input()
  text = '';
  @Input()
  showIcon = true;

  displayedText = '';
}
