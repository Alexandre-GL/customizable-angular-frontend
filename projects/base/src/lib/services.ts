import { MessagingService, MESSAGING_SERVICE } from "./messaging/messaging.service";
import { MessagingConfigService, MESSAGING_CONFIG_SERVICE } from "./messaging/messaging-config.service";
import { InjectionToken } from "@angular/core";

type Services = Record<string, {
  service: any,
  provides: InjectionToken<any>
}>

export const services: Services = {
  messagingService: { service: MessagingService, provides: MESSAGING_SERVICE },
  messagingConfigService: { service: MessagingConfigService, provides: MESSAGING_CONFIG_SERVICE },
}