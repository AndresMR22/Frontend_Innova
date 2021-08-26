import { TestBed } from '@angular/core/testing';

import { ServiceEnlaceService } from './service-enlace.service';

describe('ServiceEnlaceService', () => {
  let service: ServiceEnlaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceEnlaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
