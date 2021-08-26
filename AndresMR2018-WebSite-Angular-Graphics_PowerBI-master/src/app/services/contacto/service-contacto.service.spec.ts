import { TestBed } from '@angular/core/testing';

import { ServiceContactoService } from './service-contacto.service';

describe('ServiceContactoService', () => {
  let service: ServiceContactoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceContactoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
