import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Message, MessagingService } from 'base';
import { DialogContent } from './dialog/dialog.component';

@Injectable()
export class MessagingServiceCustom extends MessagingService {

  msg: Message | undefined;

  constructor(public dialog: MatDialog) { super(); }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContent);

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;
      if (this.msg) this.insertMessage(this.msg);
    });
  }

  override onSend(msg: Message) {
    this.msg = msg;
    this.openDialog()
  }
}
