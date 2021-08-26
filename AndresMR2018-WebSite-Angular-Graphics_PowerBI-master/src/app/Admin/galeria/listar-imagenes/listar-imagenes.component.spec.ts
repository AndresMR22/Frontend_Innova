import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarImagenesComponent } from './listar-imagenes.component';

describe('ListarImagenesComponent', () => {
  let component: ListarImagenesComponent;
  let fixture: ComponentFixture<ListarImagenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarImagenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
