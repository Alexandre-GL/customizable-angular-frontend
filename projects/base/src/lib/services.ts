import { MessagingService, MESSAGING_SERVICE } from "./messaging/messaging.service";
import { MessagingConfigService, MESSAGING_CONFIG_SERVICE } from "./messaging/messaging-config.service";

export const services = {
  messagingService: { service: MessagingService, provides: MESSAGING_SERVICE },
  messagingConfigService: { service: MessagingConfigService, provides: MESSAGING_CONFIG_SERVICE },
}

export type Services = Record<keyof typeof services, any>