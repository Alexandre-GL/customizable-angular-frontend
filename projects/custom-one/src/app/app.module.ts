import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BaseModule } from 'base';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagingServiceCustom } from './messaging/messaging.service';
import { MessagingModule } from './messaging/messaging.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BaseModule.forRoot({
      messagingService: MessagingServiceCustom
    }),
    MessagingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
