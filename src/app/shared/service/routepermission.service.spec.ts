import { TestBed } from '@angular/core/testing';

import { RoutepermissionService } from './routepermission.service';

describe('RoutepermissionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoutepermissionService = TestBed.get(RoutepermissionService);
    expect(service).toBeTruthy();
  });
});
