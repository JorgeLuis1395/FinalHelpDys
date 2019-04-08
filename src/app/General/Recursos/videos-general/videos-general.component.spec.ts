import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosGeneralComponent } from './videos-general.component';

describe('VideosGeneralComponent', () => {
  let component: VideosGeneralComponent;
  let fixture: ComponentFixture<VideosGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
