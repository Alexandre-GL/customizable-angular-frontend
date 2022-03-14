import { Injectable } from '@angular/core';
import { Config, MessagingConfigService } from 'base';

@Injectable({
  providedIn: 'root'
})
export class MessagingConfigServiceCustom extends MessagingConfigService {

  constructor() { super() }

  override get config(): Config {
    return {
      input: {
        fields: [{ id: 'author', label: "Author" }, { id: 'msg', label: "Message" }]
      }
    }
  }
}
