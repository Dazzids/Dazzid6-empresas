import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredAcadComponent } from './cred-acad.component';

describe('CredAcadComponent', () => {
  let component: CredAcadComponent;
  let fixture: ComponentFixture<CredAcadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredAcadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CredAcadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
