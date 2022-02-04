import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspacePreferenceComponent } from './workspace-preference.component';

describe('WorkspacePreferenceComponent', () => {
  let component: WorkspacePreferenceComponent;
  let fixture: ComponentFixture<WorkspacePreferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkspacePreferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspacePreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
