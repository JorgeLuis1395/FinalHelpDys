import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionGeneral2Component } from './informacion-general2.component';

describe('InformacionGeneral2Component', () => {
  let component: InformacionGeneral2Component;
  let fixture: ComponentFixture<InformacionGeneral2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionGeneral2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionGeneral2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
