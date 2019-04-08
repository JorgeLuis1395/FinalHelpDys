import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CuentosGeneralComponent} from "./cuentos.component";


describe('CuentosComponent', () => {
  let component: CuentosGeneralComponent;
  let fixture: ComponentFixture<CuentosGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentosGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentosGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
