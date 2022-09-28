export interface Prototype {
  clone(): Prototype
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(public name: string, public age: number) {}

  clone(): Person {
    const newObj = new Person(this.name, this.age);
    newObj.addresses = this.addresses.map((item) => item.clone());
    return newObj;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

export class Address implements Prototype {
  constructor(public street: string, public number: number) {}

  clone(): Address {
    return new Address(this.street, this.number);
  }
}

const address1 = new Address('Barro', 20);

const person1 =  new Person('Matheus', 19);
person1.addAddress(address1);
const person2 = person1.clone();

person1.addresses[0].street = 'Av Recife';

person2.name = 'Duda';
console.log(person1.addresses);
console.log(person2.addresses);