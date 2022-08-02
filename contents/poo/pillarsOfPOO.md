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