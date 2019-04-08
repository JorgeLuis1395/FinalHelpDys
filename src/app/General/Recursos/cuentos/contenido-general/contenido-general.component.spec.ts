import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoGeneralComponent } from './contenido-general.component';

describe('ContenidoGeneralComponent', () => {
  let component: ContenidoGeneralComponent;
  let fixture: ComponentFixture<ContenidoGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidoGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
