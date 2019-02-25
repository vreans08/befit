import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientmapComponent } from './patientmap.component';

describe('PatientmapComponent', () => {
  let component: PatientmapComponent;
  let fixture: ComponentFixture<PatientmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
