import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoslacteoComponent } from './productoslacteo.component';

describe('ProductoslacteoComponent', () => {
  let component: ProductoslacteoComponent;
  let fixture: ComponentFixture<ProductoslacteoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoslacteoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoslacteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
