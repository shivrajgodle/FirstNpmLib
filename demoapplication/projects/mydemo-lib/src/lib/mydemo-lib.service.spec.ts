import { TestBed } from '@angular/core/testing';

import { MydemoLibService } from './mydemo-lib.service';

describe('MydemoLibService', () => {
  let service: MydemoLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MydemoLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
