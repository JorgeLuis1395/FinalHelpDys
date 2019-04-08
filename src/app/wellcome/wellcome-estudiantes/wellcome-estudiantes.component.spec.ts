import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellcomeEstudiantesComponent } from './wellcome-estudiantes.component';

describe('WellcomeEstudiantesComponent', () => {
  let component: WellcomeEstudiantesComponent;
  let fixture: ComponentFixture<WellcomeEstudiantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellcomeEstudiantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellcomeEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
