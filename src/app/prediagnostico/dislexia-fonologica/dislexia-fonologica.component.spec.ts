import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DislexiaFonologicaComponent } from './dislexia-fonologica.component';

describe('DislexiaFonologicaComponent', () => {
  let component: DislexiaFonologicaComponent;
  let fixture: ComponentFixture<DislexiaFonologicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DislexiaFonologicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DislexiaFonologicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
