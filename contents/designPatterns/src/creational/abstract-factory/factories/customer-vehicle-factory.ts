import { Customer } from "../customer/customer";
import { Vehicle } from "../Vehicle/vehicle";

export interface CreateCustomerVehicle {
  createCustomer(name: string): Customer;
  createVehicle(name: string, customerName: string): Vehicle;
}
