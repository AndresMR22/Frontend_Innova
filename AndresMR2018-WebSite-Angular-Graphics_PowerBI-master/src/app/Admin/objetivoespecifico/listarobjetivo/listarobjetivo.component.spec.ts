import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarobjetivoComponent } from './listarobjetivo.component';

describe('ListarobjetivoComponent', () => {
  let component: ListarobjetivoComponent;
  let fixture: ComponentFixture<ListarobjetivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarobjetivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarobjetivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
