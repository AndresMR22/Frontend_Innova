import { TestBed } from '@angular/core/testing';

import { PalabraserviceService } from './palabraservice.service';

describe('PalabraserviceService', () => {
  let service: PalabraserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PalabraserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
