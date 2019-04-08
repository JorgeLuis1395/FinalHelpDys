import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dislexia02Component } from './dislexia02.component';

describe('Dislexia02Component', () => {
  let component: Dislexia02Component;
  let fixture: ComponentFixture<Dislexia02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dislexia02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dislexia02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
