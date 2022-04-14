import { TestBed } from '@angular/core/testing';

import { RutasAdminGuard } from './rutas-admin.guard';

describe('RutasAdminGuard', () => {
  let guard: RutasAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RutasAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
