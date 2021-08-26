import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGrupoProductoComponent } from './add-grupo-producto.component';

describe('AddGrupoProductoComponent', () => {
  let component: AddGrupoProductoComponent;
  let fixture: ComponentFixture<AddGrupoProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGrupoProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGrupoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
