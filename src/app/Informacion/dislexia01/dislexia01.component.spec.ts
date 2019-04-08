import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dislexia01Component } from './dislexia01.component';

describe('Dislexia01Component', () => {
  let component: Dislexia01Component;
  let fixture: ComponentFixture<Dislexia01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dislexia01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dislexia01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
