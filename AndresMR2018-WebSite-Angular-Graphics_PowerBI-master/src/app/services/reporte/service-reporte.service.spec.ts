import { TestBed } from '@angular/core/testing';

import { ServiceReporteService } from './service-reporte.service';

describe('ServiceReporteService', () => {
  let service: ServiceReporteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceReporteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
