import { TestBed } from '@angular/core/testing';

import { SnickerService } from './snicker.service';

describe('SnickerService', () => {
  let service: SnickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
