import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './base-routing.module';
import { BaseComponent } from './base.component';

import { MessagingModule } from './messaging/messaging.module';
import { services } from './services';

export type BaseConfig = Record<string, Type<any>>;

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
  static forRoot(config?: BaseConfig): ModuleWithProviders<BaseModule> {
    const res = {
      ngModule: BaseModule,
      providers: Object.keys(services).map((key) => {
        return { provide: services[key].provides, useClass: config && config[key] || services[key].service }
      })
    };
    console.log(res);
    return res
  }
}