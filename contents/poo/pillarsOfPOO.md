# Os Pilares do POO

## Abstração

Permite isolar de um objeto somente os conceitos que são necessários para o funcionamento do programa.
Modelando apenas atributos e comportamentos específicos.

```ts
class Pessoa {
  private name: string;
  private age: number;
  
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
```

Uma pessoa tem várias características, mas abstraimos todas elas e usamos apenas o que for necessário para o nosso código funcionar!

## Encapsulamento

Visa ocultar partes internas de um objeto e exibir apenas o necessário para uso externo.

```ts
class RemoteControl {
  constructor(private powerStatus = false) { }
 
  public turnOn() {
    this.powerStatus = true;
  }

  public turnOff() {
    this.powerStatus = false;
  }

  public getStatus() {
    return this.powerStatus;
  }
}
```

## Herança

Visa passar características de um objeto para outro.

```ts
abstract class Animal {
  constructor(public name: string) {}
  abstract makeNoise(): void;
}

class Dog extends Animal {
  makeNoise(): void {
    console.log(`${this.name} está fazendo AU AU...`);
  }
}

class Cat extends Animal {
  makeNoise(): void {
    console.log(`${this.name} está fazendo MIAU...`);
  }
}
```

## Polimorfismo

Algo que é polimorfo tem a habilidade de assumir diferentes formas.
O Polimorfismo é a habilidade de um programa detectar a classe real de um objeto e chamar sua implementação mesmo
quando seu tipo real é desconhecido no contexto atual

```ts
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
```