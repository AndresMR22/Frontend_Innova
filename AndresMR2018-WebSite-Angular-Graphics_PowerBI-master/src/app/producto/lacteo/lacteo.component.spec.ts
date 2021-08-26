import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LacteoComponent } from './lacteo.component';

describe('LacteoComponent', () => {
  let component: LacteoComponent;
  let fixture: ComponentFixture<LacteoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LacteoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LacteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
