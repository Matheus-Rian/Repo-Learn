const personPrototype = {
  firstName: 'Matheus',
  lastName: 'Silva',

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
}

const anotherPerson = Object.create(personPrototype);
console.log(anotherPerson.fullName());
