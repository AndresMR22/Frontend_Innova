import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalBienvenidaComponent } from './principal-bienvenida.component';

describe('PrincipalBienvenidaComponent', () => {
  let component: PrincipalBienvenidaComponent;
  let fixture: ComponentFixture<PrincipalBienvenidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalBienvenidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalBienvenidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
