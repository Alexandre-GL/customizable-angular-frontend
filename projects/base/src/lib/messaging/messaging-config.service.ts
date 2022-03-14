import { Injectable, InjectionToken } from '@angular/core';
import { Config } from './types';

export interface IMessagingConfigService {
  get config(): Config;
}

export const MESSAGING_CONFIG_SERVICE = new InjectionToken<IMessagingConfigService>('MESSAGING_CONFIG_SERVICE');

@Injectable()
export class MessagingConfigService implements IMessagingConfigService {
  get config() {
    return {
      input: {
        fields: [{ id: 'msg', label: "Message" }]
      }
    }
  }
}
