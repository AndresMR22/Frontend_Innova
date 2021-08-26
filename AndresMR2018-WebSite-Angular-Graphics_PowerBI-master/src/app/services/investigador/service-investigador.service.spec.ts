import { TestBed } from '@angular/core/testing';

import { ServiceInvestigadorService } from './service-investigador.service';

describe('ServiceInvestigadorService', () => {
  let service: ServiceInvestigadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceInvestigadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
