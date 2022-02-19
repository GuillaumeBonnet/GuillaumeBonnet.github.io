import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubProjectLinkComponent } from './github-project-link.component';

describe('GithubProjectLinkComponent', () => {
  let component: GithubProjectLinkComponent;
  let fixture: ComponentFixture<GithubProjectLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubProjectLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubProjectLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
