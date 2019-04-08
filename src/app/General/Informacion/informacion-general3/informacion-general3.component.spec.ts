import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionGeneral3Component } from './informacion-general3.component';

describe('InformacionGeneral3Component', () => {
  let component: InformacionGeneral3Component;
  let fixture: ComponentFixture<InformacionGeneral3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionGeneral3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionGeneral3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
