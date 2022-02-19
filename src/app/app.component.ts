import { Component } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    Location,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
})
export class AppComponent {
  isUnderTailwindSmall: MediaQueryList;
  constructor(
    router: Router,
    media: MediaMatcher,
    locationStrategy: LocationStrategy
  ) {
    this.isUnderTailwindSmall = media.matchMedia('(max-width: 640px)');
    this.isUnderTailwindSmall.addEventListener('change', (ev) => {
      //the presence of the empty callback is enough for angular to re-render on media query changes
    });

    router.events.subscribe((event) => {
      if (event instanceof RoutesRecognized) {
        this.url = event.urlAfterRedirects;
      }
    });

    if (locationStrategy.getBaseHref() == '/fr-FR') {
      this.isFr = true;
    }
  }

  url = '';
  isFr = false;

  navData = [
    { url: '/about', text: $localize`:@@about:About` },
    { url: '/linked-in', text: 'LinkedIn' },
    {
      url: '/github/home',
      text: $localize`:@@nav-link-github:Github / Port Folio`,
    },
  ];
}
