import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCarruselComponent } from './listar-carrusel.component';

describe('ListarCarruselComponent', () => {
  let component: ListarCarruselComponent;
  let fixture: ComponentFixture<ListarCarruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCarruselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCarruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
