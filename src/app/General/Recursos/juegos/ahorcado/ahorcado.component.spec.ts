import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {AhorcadoGeneralComponent} from './ahorcado.component';

describe('AhorcadoComponent', () => {
  let component: AhorcadoGeneralComponent;
  let fixture: ComponentFixture<AhorcadoGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhorcadoGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AhorcadoGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
