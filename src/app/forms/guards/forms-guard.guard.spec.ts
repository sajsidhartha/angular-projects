import { TestBed } from '@angular/core/testing';

import { FormsGuardGuard } from './forms-guard.guard';

describe('FormsGuardGuard', () => {
  let guard: FormsGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FormsGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
