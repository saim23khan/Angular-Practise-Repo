import { TestBed } from '@angular/core/testing';

import { NavigaterService } from './navigater.service';

describe('NavigaterService', () => {
  let service: NavigaterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigaterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
