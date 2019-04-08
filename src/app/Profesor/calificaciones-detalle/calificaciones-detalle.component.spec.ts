import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionesDetalleComponent } from './calificaciones-detalle.component';

describe('CalificacionesDetalleComponent', () => {
  let component: CalificacionesDetalleComponent;
  let fixture: ComponentFixture<CalificacionesDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalificacionesDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificacionesDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
