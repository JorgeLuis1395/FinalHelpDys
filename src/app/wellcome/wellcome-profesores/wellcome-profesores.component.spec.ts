import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellcomeProfesoresComponent } from './wellcome-profesores.component';

describe('WellcomeProfesoresComponent', () => {
  let component: WellcomeProfesoresComponent;
  let fixture: ComponentFixture<WellcomeProfesoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellcomeProfesoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellcomeProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
