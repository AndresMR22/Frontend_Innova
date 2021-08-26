import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddobjetivoComponent } from './addobjetivo.component';

describe('AddobjetivoComponent', () => {
  let component: AddobjetivoComponent;
  let fixture: ComponentFixture<AddobjetivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddobjetivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddobjetivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
