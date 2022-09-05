import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  constructor() {}

  publicationDate = new Date('2022-09-05').toLocaleDateString('en-us', {
    dateStyle: 'medium',
  });
  lastEditionDate = new Date('2022-09-05').toLocaleDateString('en-us', {
    dateStyle: 'medium',
  });

  ngOnInit(): void {}
}
