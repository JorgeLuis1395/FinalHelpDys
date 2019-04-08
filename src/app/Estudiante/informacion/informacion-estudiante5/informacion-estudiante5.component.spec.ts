import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionEstudiante5Component } from './informacion-estudiante5.component';

describe('InformacionEstudiante5Component', () => {
  let component: InformacionEstudiante5Component;
  let fixture: ComponentFixture<InformacionEstudiante5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionEstudiante5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionEstudiante5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
