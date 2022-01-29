import { Component, OnInit } from '@angular/core';
import { projects } from 'src/projectData';

@Component({
  selector: 'app-freezer-practice',
  templateUrl: './freezer-practice.component.html',
  styleUrls: ['./freezer-practice.component.scss'],
})
export class FreezerPracticeComponent implements OnInit {
  projects = projects;
  constructor() {}

  ngOnInit(): void {}
}
