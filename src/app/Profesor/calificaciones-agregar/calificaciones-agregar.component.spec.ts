import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionesAgregarComponent } from './calificaciones-agregar.component';

describe('CalificacionesAgregarComponent', () => {
  let component: CalificacionesAgregarComponent;
  let fixture: ComponentFixture<CalificacionesAgregarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalificacionesAgregarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificacionesAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
