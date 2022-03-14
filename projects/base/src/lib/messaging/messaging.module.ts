import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessagingComponent } from './messaging.component';
import { MessageComponent } from './message/message.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    InputComponent,
    MessageListComponent,
    MessagingComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    MessagingComponent
  ],
})
export class MessagingModule { }
