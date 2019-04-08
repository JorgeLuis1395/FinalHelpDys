import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionGeneral4Component } from './informacion-general4.component';

describe('InformacionGeneral4Component', () => {
  let component: InformacionGeneral4Component;
  let fixture: ComponentFixture<InformacionGeneral4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionGeneral4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionGeneral4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
