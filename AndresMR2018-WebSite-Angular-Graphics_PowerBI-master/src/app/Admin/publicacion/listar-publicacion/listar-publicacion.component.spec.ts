import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPublicacionComponent } from './listar-publicacion.component';

describe('ListarPublicacionComponent', () => {
  let component: ListarPublicacionComponent;
  let fixture: ComponentFixture<ListarPublicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPublicacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
