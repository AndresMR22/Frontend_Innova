import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPalabraclaveComponent } from './add-palabraclave.component';

describe('AddPalabraclaveComponent', () => {
  let component: AddPalabraclaveComponent;
  let fixture: ComponentFixture<AddPalabraclaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPalabraclaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPalabraclaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
