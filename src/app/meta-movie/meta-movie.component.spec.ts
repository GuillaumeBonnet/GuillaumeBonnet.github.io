import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaMovieComponent } from './meta-movie.component';

describe('MetaMovieComponent', () => {
  let component: MetaMovieComponent;
  let fixture: ComponentFixture<MetaMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetaMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
