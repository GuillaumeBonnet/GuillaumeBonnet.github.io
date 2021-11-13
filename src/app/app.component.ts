import { Component } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(router: Router) {
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
