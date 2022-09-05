import { Component, Input, OnInit } from '@angular/core';
import { HighlightResult } from 'highlight.js';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import TypeScript from 'highlight.js/lib/languages/TypeScript';
import json from 'highlight.js/lib/languages/json';

@Component({
  selector: 'app-code-snippet',
  templateUrl: './code-snippet.component.html',
  styleUrls: ['./code-snippet.component.scss'],
})
export class CodeSnippetComponent implements OnInit {
  constructor() {
    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('typescript', TypeScript);
    hljs.registerLanguage('json', json);
  }

  @Input()
  inline = false;
  @Input()
  code!: string;
  @Input()
  language!: 'javascript' | 'typescript' | 'json';
  htmlContent!: string;

  ngOnInit(): void {
    console.log('gboDebug:[this.code]', this.code);
    this.htmlContent = hljs.highlight(this.language, this.code).value;
  }
}
