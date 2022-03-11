import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCredencialComponent } from './crear-credencial.component';

describe('CrearCredencialComponent', () => {
  let component: CrearCredencialComponent;
  let fixture: ComponentFixture<CrearCredencialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCredencialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCredencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
