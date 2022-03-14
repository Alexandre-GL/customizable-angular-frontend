import { TestBed } from '@angular/core/testing';

import { MessagingConfigService } from './messaging-config.service';

describe('MessagingConfigService', () => {
  let service: MessagingConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagingConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
