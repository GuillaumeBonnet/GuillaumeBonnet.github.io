import { Component, OnInit } from '@angular/core';
import { projects } from 'src/projectData';

@Component({
  selector: 'app-workspace-preference',
  templateUrl: './workspace-preference.component.html',
  styleUrls: ['./workspace-preference.component.scss'],
})
export class WorkspacePreferenceComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  projectData = projects['workspace-preference'];
}
