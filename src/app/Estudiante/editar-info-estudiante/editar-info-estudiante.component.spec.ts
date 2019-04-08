import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInfoEstudianteComponent } from './editar-info-estudiante.component';

describe('EditarInfoEstudianteComponent', () => {
  let component: EditarInfoEstudianteComponent;
  let fixture: ComponentFixture<EditarInfoEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarInfoEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarInfoEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
