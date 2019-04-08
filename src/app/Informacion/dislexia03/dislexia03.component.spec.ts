import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dislexia03Component } from './dislexia03.component';

describe('Dislexia03Component', () => {
  let component: Dislexia03Component;
  let fixture: ComponentFixture<Dislexia03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dislexia03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dislexia03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
