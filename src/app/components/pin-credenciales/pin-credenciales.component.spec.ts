import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinCredencialesComponent } from './pin-credenciales.component';

describe('PinCredencialesComponent', () => {
  let component: PinCredencialesComponent;
  let fixture: ComponentFixture<PinCredencialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinCredencialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinCredencialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
