import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionesEstudianteComponent } from './calificaciones.component';

describe('CalificacionesEstudianteComponent', () => {
  let component: CalificacionesEstudianteComponent;
  let fixture: ComponentFixture<CalificacionesEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalificacionesEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificacionesEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
