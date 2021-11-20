import { Component } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isUnderTailwindSmall: MediaQueryList;
  constructor(router: Router, media: MediaMatcher) {
    this.isUnderTailwindSmall = media.matchMedia('(max-width: 640px)');
    this.isUnderTailwindSmall.addEventListener('change', (ev) => {
      //the presnce of the empty callback is enough for angular to re-render on media query changes
    });

    console.log(
      'gboDebug:[this.isUnderTailwindSmall]',
      this.isUnderTailwindSmall
    );
    console.log(
      'gboDebug:[this.isUnderTailwindSmall.matches]',
      this.isUnderTailwindSmall.matches
    );

    router.events.subscribe((event) => {
      if (event instanceof RoutesRecognized) {
        this.url = event.urlAfterRedirects;
      }
    });
  }

  url = '';

  navData = [
    { url: '/about', text: 'About' },
    { url: '/port-folio', text: 'Port Folio' },
    { url: '/linked-in', text: 'LinkedIn' },
    { url: '/github', text: 'Github' },
  ];
}
