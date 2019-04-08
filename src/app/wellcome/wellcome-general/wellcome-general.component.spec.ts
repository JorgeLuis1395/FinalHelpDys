import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellcomeGeneralComponent } from './wellcome-general.component';

describe('WellcomeGeneralComponent', () => {
  let component: WellcomeGeneralComponent;
  let fixture: ComponentFixture<WellcomeGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellcomeGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellcomeGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
