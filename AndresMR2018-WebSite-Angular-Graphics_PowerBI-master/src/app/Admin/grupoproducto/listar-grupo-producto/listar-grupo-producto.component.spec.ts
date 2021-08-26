import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarGrupoProductoComponent } from './listar-grupo-producto.component';

describe('ListarGrupoProductoComponent', () => {
  let component: ListarGrupoProductoComponent;
  let fixture: ComponentFixture<ListarGrupoProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarGrupoProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarGrupoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
