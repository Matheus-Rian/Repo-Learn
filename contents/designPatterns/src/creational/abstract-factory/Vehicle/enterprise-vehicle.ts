import { Customer } from "../interfaces/customer";
import { Vehicle } from "../interfaces/vehicle";

export class EnterpriseVehicle implements Vehicle {
  constructor (public name: string, public customer: Customer) {}

  pickUp(): void {
    console.log(`${this.name} está buscando ${this.customer}`);
  }
}
