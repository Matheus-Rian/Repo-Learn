import { DeliveryFlyweight } from './delivery-flyweight-protocol';
import { DeliveryLocation } from './delivery-location';
import {
  DeliveryFactoryLocation,
  DeliveryLocationShared,
} from "./delivery-types";

export class DeliveryFactory {
  private locations: DeliveryFactoryLocation = {};

  private createId(data: DeliveryLocationShared): string {
    return Object.values(data)
      .map((item) => item.replace(/\s+/, "").toLowerCase())
      .join("_");
  }

  makeLocation(intrisicSharedState: DeliveryLocationShared): DeliveryFlyweight {
    const id = this.createId(intrisicSharedState);

    if (id in this.locations)
      return this.locations[id];

    this.locations[id] = new DeliveryLocation(intrisicSharedState);

    return this.locations[id];
  }

  getLocations(): DeliveryFactoryLocation {
    return this.locations;
  }
}
