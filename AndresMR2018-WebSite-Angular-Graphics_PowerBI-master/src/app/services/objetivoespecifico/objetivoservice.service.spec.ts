import { TestBed } from '@angular/core/testing';

import { ObjetivoserviceService } from './objetivoservice.service';

describe('ObjetivoserviceService', () => {
  let service: ObjetivoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjetivoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
