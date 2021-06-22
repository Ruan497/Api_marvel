import { TestBed } from '@angular/core/testing';

import { MarvelSService } from './marvel-s.service';

describe('MarvelSService', () => {
  let service: MarvelSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarvelSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
