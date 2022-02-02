import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fullscreen-container',
  templateUrl: './fullscreen-container.component.html',
  styleUrls: ['./fullscreen-container.component.scss'],
})
export class FullscreenContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public isFullscreen = false;
  public toggleScreen(event: MouseEvent) {
    this.isFullscreen = !this.isFullscreen;
    event.stopPropagation();
  }
  public leaveFullscreen() {
    this.isFullscreen = false;
  }
}
