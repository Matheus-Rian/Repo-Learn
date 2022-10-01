import { Vehicle } from "../vehicle/vehicle";

export abstract class VehicleFactory {
  //Factory Method
  abstract getVehicle(vehicleName: string): Vehicle;
  
  pickUp(vehicleName: string, customerName: string): Vehicle {
    const vehicle = this.getVehicle(vehicleName);
    vehicle.pickUp(customerName);
    return vehicle;
  }
}
