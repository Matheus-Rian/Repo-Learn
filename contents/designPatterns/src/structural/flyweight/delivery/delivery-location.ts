import { DeliveryFlyweight } from "./delivery-flyweight-protocol";
import { DeliveryLocationShared } from "./delivery-types";

export class DeliveryLocation implements DeliveryFlyweight {
  // SharedState - Intrisic State
  constructor (private readonly sharedState: DeliveryLocationShared) {}

  deliver(name: string, number: string): void {
    console.log('Entrega para %s', name);
    console.log('Em', this.sharedState.street, this.sharedState.city);
    console.log('Número: ', number);
    console.log('###');
  }
}
