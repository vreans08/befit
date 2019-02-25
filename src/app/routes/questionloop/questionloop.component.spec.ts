import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionloopComponent } from './questionloop.component';

describe('QuestionloopComponent', () => {
  let component: QuestionloopComponent;
  let fixture: ComponentFixture<QuestionloopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionloopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionloopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
