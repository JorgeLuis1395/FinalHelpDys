import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesGeneralComponent } from './imagenes.component';

describe('ImagenesComponent', () => {
  let component: ImagenesGeneralComponent;
  let fixture: ComponentFixture<ImagenesGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenesGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenesGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
