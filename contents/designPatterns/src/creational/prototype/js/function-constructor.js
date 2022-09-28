function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const personPrototype = {
  firstName: 'Matheus',
  lastName: 'Silva',

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
}

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

function ChildPerson(firstName, lastName) {
  Person.call(this, firstName, lastName);
  this.filiation = 'Cleitin';
}

ChildPerson.prototype = Object.create(Person.prototype);
Person.prototype.constructor = ChildPerson;

const person1 = new Person('MATHEUS', 'SILVA');
console.log(person1);
console.log(person1.fullName());

const person2 = new ChildPerson('MC', 'TIGRINHO');
console.log(person2);
console.log(person2.fullName());