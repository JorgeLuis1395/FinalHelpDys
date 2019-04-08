import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {Memoria1GeneralComponent} from './memoria1.component';

describe('Memoria1Component', () => {
  let component: Memoria1GeneralComponent;
  let fixture: ComponentFixture<Memoria1GeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Memoria1GeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Memoria1GeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
