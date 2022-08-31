# Princípios de projeto

### 1. Encapsule o que varia

Identifique os aspectos da sua aplicação que variam e separe-os dos que permanecem os mesmos. 

### 2. Programe para uma interface, não uma implementação.

Programe para uma interface, não uma implementação. Dependa de abstrações, não classes concretas.

```ts
interface Food {
  getNutrition: () => string;
}

class Sausage implements Food {
  getNutrition() {
    return '300';
  }

  getColor() {
    console.log('Color...');
  }

  getExpiration() {
    console.log('Expiration...');
  }
}

class Cat {
  private energy: string = '';
  constructor() {}

  eat(f: Food) {
    this.energy += f.getNutrition();
    console.log(this.energy)
  }
}

const cat = new Cat();
cat.eat(new Sausage());
```

### 3. Prefira composição sobre herança

Infelizmente, a herança vem com um lado ruim que se torna aparente apenas quando seu programa já tem um monte de classes e mudar tudo fica muito difícil. Aqui temos uma lista desses problemas.