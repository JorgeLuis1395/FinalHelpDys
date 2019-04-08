import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionEstudiante4Component } from './informacion-estudiante4.component';

describe('InformacionEstudiante4Component', () => {
  let component: InformacionEstudiante4Component;
  let fixture: ComponentFixture<InformacionEstudiante4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionEstudiante4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionEstudiante4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
