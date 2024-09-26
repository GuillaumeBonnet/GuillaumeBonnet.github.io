import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesforceDataCopyComponent } from './salesforce-data-copy.component';

describe('SalesforceDataCopyComponent', () => {
  let component: SalesforceDataCopyComponent;
  let fixture: ComponentFixture<SalesforceDataCopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesforceDataCopyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesforceDataCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
