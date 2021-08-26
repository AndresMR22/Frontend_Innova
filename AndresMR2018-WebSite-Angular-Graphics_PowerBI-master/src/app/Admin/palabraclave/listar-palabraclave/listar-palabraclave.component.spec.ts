import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPalabraclaveComponent } from './listar-palabraclave.component';

describe('ListarPalabraclaveComponent', () => {
  let component: ListarPalabraclaveComponent;
  let fixture: ComponentFixture<ListarPalabraclaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPalabraclaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPalabraclaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
