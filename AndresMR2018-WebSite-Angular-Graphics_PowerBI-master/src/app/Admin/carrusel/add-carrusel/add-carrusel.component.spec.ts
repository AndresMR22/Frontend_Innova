import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarruselComponent } from './add-carrusel.component';

describe('AddCarruselComponent', () => {
  let component: AddCarruselComponent;
  let fixture: ComponentFixture<AddCarruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCarruselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCarruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
