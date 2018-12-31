import { TestBed } from '@angular/core/testing';

import { ScrollListenerService } from './scroll-listener.service';

describe('ScrollListenerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScrollListenerService = TestBed.get(ScrollListenerService);
    expect(service).toBeTruthy();
  });
});
