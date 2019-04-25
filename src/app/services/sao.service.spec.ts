import { TestBed } from '@angular/core/testing';

import { SaoService } from './sao.service';

describe('SaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaoService = TestBed.get(SaoService);
    expect(service).toBeTruthy();
  });
});
