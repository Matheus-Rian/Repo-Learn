interface Animal {
  makeNoise: () => void;
}

class Dog implements Animal {
  constructor (public name: string) {}

  makeNoise() {
    console.log(`${this.name} está fazendo AU AU...`);
  }
}

class Cat implements Animal {
  constructor (public name: string) {}

  makeNoise() {
    console.log(`${this.name} está fazendo MIAU...`);
  }
}

class AnimalSounds {
  public playSound(animal: Animal): void {
    animal.makeNoise();
  }
}

const dog = new Dog('Tina');
const cat = new Cat('Suzy');
const animalSounds = new AnimalSounds();
animalSounds.playSound(dog); //  Tina está fazendo AU AU...
animalSounds.playSound(cat); //  Suzy está fazendo MIAU...