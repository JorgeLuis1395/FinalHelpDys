import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {MemoriaGeneralComponent} from './memoria.component';

describe('MemoriaComponent', () => {
  let component: MemoriaGeneralComponent;
  let fixture: ComponentFixture<MemoriaGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoriaGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoriaGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
