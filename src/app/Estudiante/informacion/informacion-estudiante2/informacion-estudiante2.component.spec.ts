import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionEstudiante2Component } from './informacion-estudiante2.component';

describe('InformacionEstudiante2Component', () => {
  let component: InformacionEstudiante2Component;
  let fixture: ComponentFixture<InformacionEstudiante2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionEstudiante2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionEstudiante2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
