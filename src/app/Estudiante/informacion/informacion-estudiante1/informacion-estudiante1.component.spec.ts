import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionEstudiante1Component } from './informacion-estudiante1.component';

describe('InformacionEstudiante1Component', () => {
  let component: InformacionEstudiante1Component;
  let fixture: ComponentFixture<InformacionEstudiante1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionEstudiante1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionEstudiante1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
