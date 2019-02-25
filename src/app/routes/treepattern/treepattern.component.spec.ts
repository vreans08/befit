import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreepatternComponent } from './treepattern.component';

describe('TreepatternComponent', () => {
  let component: TreepatternComponent;
  let fixture: ComponentFixture<TreepatternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreepatternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreepatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
