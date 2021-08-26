import { TestBed } from '@angular/core/testing';

import { ServiceGrupoproductoService } from './service-grupoproducto.service';

describe('ServiceGrupoproductoService', () => {
  let service: ServiceGrupoproductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceGrupoproductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
