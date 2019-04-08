import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dislexia05Component } from './dislexia05.component';

describe('Dislexia05Component', () => {
  let component: Dislexia05Component;
  let fixture: ComponentFixture<Dislexia05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dislexia05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dislexia05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
