import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorhomeComponent } from './doctorhome.component';

describe('DoctorhomeComponent', () => {
  let component: DoctorhomeComponent;
  let fixture: ComponentFixture<DoctorhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
