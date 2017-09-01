import { TestBed, inject } from '@angular/core/testing';

import { CookbookService } from './cookbook.service';

describe('CookbookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CookbookService]
    });
  });

  it('should be created', inject([CookbookService], (service: CookbookService) => {
    expect(service).toBeTruthy();
  }));
});
