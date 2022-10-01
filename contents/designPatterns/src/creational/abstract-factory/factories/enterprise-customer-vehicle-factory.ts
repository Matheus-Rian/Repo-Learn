import { Customer } from "../customer/customer";
import { Vehicle } from "../Vehicle/vehicle";
import { EnterpriseCustomer } from '../customer/enterprise-customer';
import { EnterpriseVehicle } from '../Vehicle/enterprise-vehicle';

export class EnterpriseCustomerVehicleFactory {
  createCustomer(name: string): Customer {
    return new EnterpriseCustomer(name);
  }

  createVehicle(name: string, customerName: string): Vehicle {
    const customer = this.createCustomer(customerName);
    return new EnterpriseVehicle(name, customer);
  }
}
