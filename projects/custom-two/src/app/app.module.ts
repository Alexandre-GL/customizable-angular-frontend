import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BaseModule } from 'base';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagingConfigServiceCustom } from './messaging/messaging-config.service';
import { MessagingModule } from './messaging/messaging.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BaseModule.forRoot({
      messagingConfigService: MessagingConfigServiceCustom
    }),
    MessagingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
