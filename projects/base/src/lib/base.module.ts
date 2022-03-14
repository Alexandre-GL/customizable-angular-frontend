import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './base-routing.module';
import { BaseComponent } from './base.component';

import { MessagingModule } from './messaging/messaging.module';
import { Services, services } from './services';

@NgModule({
  declarations: [
    BaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MessagingModule,
    BrowserAnimationsModule
  ],
  exports: [
    BaseComponent
  ],
})
export class BaseModule {
  static forRoot(config?: Partial<Services>): ModuleWithProviders<BaseModule> {
    return {
      ngModule: BaseModule,
      providers: (Object.keys(services) as Array<keyof typeof services>).map((key) => {
        return { provide: services[key].provides, useClass: config && config[key] || services[key].service }
      })
    };
  }
}