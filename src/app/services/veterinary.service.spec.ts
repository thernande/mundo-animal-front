import { TestBed, inject } from '@angular/core/testing';

import { VeterinaryService } from './veterinary.service';

describe('VeterinaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VeterinaryService]
    });
  });

  it('should be created', inject([VeterinaryService], (service: VeterinaryService) => {
    expect(service).toBeTruthy();
  }));
});
