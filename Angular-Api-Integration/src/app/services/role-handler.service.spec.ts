import { TestBed } from '@angular/core/testing';

import { RoleHandlerService } from './role-handler.service';

describe('RoleHandlerService', () => {
  let service: RoleHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
