import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrediagnosticoComponent } from './prediagnostico.component';

describe('PrediagnosticoComponent', () => {
  let component: PrediagnosticoComponent;
  let fixture: ComponentFixture<PrediagnosticoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrediagnosticoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrediagnosticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
