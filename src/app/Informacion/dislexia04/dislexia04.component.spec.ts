import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dislexia04Component } from './dislexia04.component';

describe('Dislexia04Component', () => {
  let component: Dislexia04Component;
  let fixture: ComponentFixture<Dislexia04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dislexia04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dislexia04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
