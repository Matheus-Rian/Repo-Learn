import { EnterpriseCustomerVehicleFactory } from './factories/enterprise-customer-vehicle-factory';
import { individualCustomerVehicleFactory } from './factories/individual-customer-vehicle-factory';

const enterpriseFactory = new EnterpriseCustomerVehicleFactory();
const individualFactory = new individualCustomerVehicleFactory();

const car1 = enterpriseFactory.createVehicle('Fusca', 'João');
const car2 = individualFactory.createVehicle('Celta', 'Ana');

car1.pickUp();
car2.pickUp();
