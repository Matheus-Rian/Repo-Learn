# Os Pilares do POO

## Abstração

Permite isolar de um objeto somente os conceitos que são necessários para o funcionamento do programa.


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