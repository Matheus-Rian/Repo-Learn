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

Mais um exemplo:

```ts
interface Employee {
  doWork: () => void;
}

class Designer implements Employee {
  doWork() {
    console.log('Designing...');
  }
}

class Programmer implements Employee {
  doWork() {
    console.log('Coding...');
  }
}

class Tester implements Employee {
  doWork() {
    console.log('testing...');
  }
}

class Manager implements Employee {
  doWork() {
    console.log('Managing...');
  }
}

abstract class Company {
  employees: Employee[] = [];

  createSoftware() {
    this.employees = this.getEmployees();

    for (let employee of this.employees) {
      employee.doWork();
    }
  }

  abstract getEmployees(): Employee[];
}

class GameDevCompany extends Company {
  getEmployees(): Employee[] {
   return [
      new Designer(),
      new Programmer(),
      new Tester(),
    ];
  }
}

class OutSourcingCompany extends Company {
  getEmployees(): Employee[] {
   return [
     new Manager(),
    ];
  }
}

const gdc = new GameDevCompany()
gdc.createSoftware()

const osc = new OutSourcingCompany()
osc.createSoftware()
```

### 3. Prefira composição sobre herança

Infelizmente, a herança vem com um lado ruim que se torna aparente apenas quando seu programa já tem um monte de classes e mudar tudo fica muito difícil. Aqui temos uma lista desses problemas.