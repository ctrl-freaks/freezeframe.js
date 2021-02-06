import { TestBed } from '@angular/core/testing';

import { AngularFreezeframeService } from './angular-freezeframe.service';

describe('AngularFreezeframeService', () => {
  let service: AngularFreezeframeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularFreezeframeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
