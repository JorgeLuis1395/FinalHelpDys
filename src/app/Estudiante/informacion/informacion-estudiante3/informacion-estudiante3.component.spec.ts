import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionEstudiante3Component } from './informacion-estudiante3.component';

describe('InformacionEstudiante3Component', () => {
  let component: InformacionEstudiante3Component;
  let fixture: ComponentFixture<InformacionEstudiante3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionEstudiante3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionEstudiante3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
