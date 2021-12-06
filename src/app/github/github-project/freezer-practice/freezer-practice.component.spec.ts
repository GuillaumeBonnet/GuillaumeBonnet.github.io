import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreezerPracticeComponent } from './freezer-practice.component';

describe('FreezerPracticeComponent', () => {
  let component: FreezerPracticeComponent;
  let fixture: ComponentFixture<FreezerPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreezerPracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreezerPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
