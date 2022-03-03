import { TestBed } from '@angular/core/testing';

import { StoreCredService } from './services/store-cred.service';

describe('StoreCredService', () => {
  let service: StoreCredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreCredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
