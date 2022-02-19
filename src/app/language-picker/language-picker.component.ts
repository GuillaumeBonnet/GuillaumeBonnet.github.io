import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.scss'],
})
export class LanguagePickerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  url = '';
  @Input()
  isFr = false;
}
