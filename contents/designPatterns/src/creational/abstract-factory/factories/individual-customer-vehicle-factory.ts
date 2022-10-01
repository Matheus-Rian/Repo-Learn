import { Customer } from "../customer/customer";
import { Vehicle } from "../Vehicle/vehicle";
import { IndividualCustomer } from '../customer/individual-customer';
import { IndividualVehicle } from '../Vehicle/individual-vehicle';

export class individualCustomerVehicleFactory {
  createCustomer(name: string): Customer {
    return new IndividualCustomer(name);
  }

  createVehicle(name: string, customerName: string): Vehicle {
    const customer = this.createCustomer(customerName);
    return new IndividualVehicle(name, customer);
  }
}
