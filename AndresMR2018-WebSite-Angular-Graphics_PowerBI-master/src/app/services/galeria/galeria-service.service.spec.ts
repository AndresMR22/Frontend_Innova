import { TestBed } from '@angular/core/testing';

import { GaleriaServiceService } from './galeria-service.service';

describe('GaleriaServiceService', () => {
  let service: GaleriaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GaleriaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
