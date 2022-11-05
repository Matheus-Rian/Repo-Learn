import { DeliveryFactory } from './delivery/delivery-factory';
import { deliveryContext } from './delivery/delivery-context';

const factory = new DeliveryFactory();
deliveryContext(factory, 'Matheus', '20A', 'Barro', 'Recife');
deliveryContext(factory, 'Duda', '20A', 'Barro', 'Recife');
deliveryContext(factory, 'Yan', '403', 'Barro', 'Recife');
deliveryContext(factory, 'Thiago', '23', 'Torre', 'Recife');

console.log('----');
console.log(factory.getLocations());