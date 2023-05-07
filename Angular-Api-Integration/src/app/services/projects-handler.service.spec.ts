import { TestBed } from '@angular/core/testing';

import { ProjectsHandlerService } from './projects-handler.service';

describe('ProjectsHandlerService', () => {
  let service: ProjectsHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
