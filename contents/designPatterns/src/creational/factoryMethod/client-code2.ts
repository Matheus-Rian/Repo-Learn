import { randomCarAlgorithm } from './main/random-vehicle-algorithm';
import { randomNumbers } from './utils/random-numbers';

const customersName = ['Matheus', 'Duda', 'Naty']

for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlgorithm();
  const name = customersName[randomNumbers(customersName.length)];
  vehicle.pickUp(name);
  vehicle.stop();
  console.log('---')
}
