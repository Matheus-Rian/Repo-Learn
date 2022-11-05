import { DeliveryLocation } from "./delivery-location";

export type DeliveryLocationShared = {
  readonly street: string;
  readonly city: string;
};

export type DeliveryFactoryLocation = { [key: string]: DeliveryLocation };
