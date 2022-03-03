import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DazzidComponent } from './dazzid.component';

describe('DazzidComponent', () => {
  let component: DazzidComponent;
  let fixture: ComponentFixture<DazzidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DazzidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DazzidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
