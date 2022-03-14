import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogContent } from './dialog/dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    DialogContent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class MessagingModule { }
