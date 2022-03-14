import { Component, Inject, OnInit } from '@angular/core';
import { MessagingService, MESSAGING_SERVICE } from '../messaging.service';
import { MessageList } from '../types';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  get messageList(): MessageList {
    return this.messagingService.messageList
  }

  constructor(
    @Inject(MESSAGING_SERVICE) private messagingService: MessagingService
  ) { }

  ngOnInit(): void { }

}
