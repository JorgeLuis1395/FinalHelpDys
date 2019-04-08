import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcompletoComponent } from './testcompleto.component';

describe('TestcompletoComponent', () => {
  let component: TestcompletoComponent;
  let fixture: ComponentFixture<TestcompletoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestcompletoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
