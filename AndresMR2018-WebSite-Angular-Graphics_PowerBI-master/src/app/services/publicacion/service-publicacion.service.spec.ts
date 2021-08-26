import { TestBed } from '@angular/core/testing';

import { ServicePublicacionService } from './service-publicacion.service';

describe('ServicePublicacionService', () => {
  let service: ServicePublicacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePublicacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
