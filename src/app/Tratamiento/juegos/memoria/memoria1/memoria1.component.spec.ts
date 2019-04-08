import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Memoria1Component } from './memoria1.component';

describe('Memoria1Component', () => {
  let component: Memoria1Component;
  let fixture: ComponentFixture<Memoria1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Memoria1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Memoria1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
