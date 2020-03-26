import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibTest1Component } from './lib-test1.component';

describe('LibTest1Component', () => {
  let component: LibTest1Component;
  let fixture: ComponentFixture<LibTest1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibTest1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibTest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
