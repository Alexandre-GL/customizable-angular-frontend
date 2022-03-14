import { TestBed } from '@angular/core/testing';

import { MessagingConfigServiceCustom } from './messaging-config.service';

describe('MessagingService', () => {
  let service: MessagingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
