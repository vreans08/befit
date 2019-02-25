import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorassignComponent } from './doctorassign.component';

describe('DoctorassignComponent', () => {
  let component: DoctorassignComponent;
  let fixture: ComponentFixture<DoctorassignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorassignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorassignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
