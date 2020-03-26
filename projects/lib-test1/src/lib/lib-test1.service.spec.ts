import { TestBed } from '@angular/core/testing';

import { LibTest1Service } from './lib-test1.service';

describe('LibTest1Service', () => {
  let service: LibTest1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibTest1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
