import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReporteComponent } from './add-reporte.component';

describe('AddReporteComponent', () => {
  let component: AddReporteComponent;
  let fixture: ComponentFixture<AddReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddReporteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
