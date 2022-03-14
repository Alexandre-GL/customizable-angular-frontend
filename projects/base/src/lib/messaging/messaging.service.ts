import { Injectable, InjectionToken } from '@angular/core';
import { Message, MessageList } from './types';

export interface IMessagingService {
  get messageList(): MessageList
  insertMessage(msg: Message): void
  onSend(msg: Message): void
}

export const MESSAGING_SERVICE = new InjectionToken<IMessagingService>('MESSAGING_SERVICE');

@Injectable()
export class MessagingService implements IMessagingService {

  private messageListPrivate: MessageList = [];

  get messageList(): MessageList {
    return this.messageListPrivate
  }

  constructor() { }

  insertMessage(msg: Message) {
    this.messageList.push(msg)
  }

  onSend(msg: Message) {
    this.insertMessage(msg);
  }
}
