import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEnlaceComponent } from './listar-enlace.component';

describe('ListarEnlaceComponent', () => {
  let component: ListarEnlaceComponent;
  let fixture: ComponentFixture<ListarEnlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEnlaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEnlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
