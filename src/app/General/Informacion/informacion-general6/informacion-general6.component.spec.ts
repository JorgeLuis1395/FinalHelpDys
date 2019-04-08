import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionGeneral6Component } from './informacion-general6.component';

describe('InformacionGeneral6Component', () => {
  let component: InformacionGeneral6Component;
  let fixture: ComponentFixture<InformacionGeneral6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionGeneral6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionGeneral6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
