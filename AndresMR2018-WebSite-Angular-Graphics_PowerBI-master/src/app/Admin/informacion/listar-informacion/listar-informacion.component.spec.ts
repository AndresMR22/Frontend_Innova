import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarInformacionComponent } from './listar-informacion.component';

describe('ListarInformacionComponent', () => {
  let component: ListarInformacionComponent;
  let fixture: ComponentFixture<ListarInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarInformacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
