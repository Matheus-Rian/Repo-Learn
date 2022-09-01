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

* **Uma subclasse não pode reduzir a interface da superclasse.** Você tem que implementar todos os métodos abstratos da
classe mãe mesmo que você não os utilize.

* **Quando sobrescrevendo métodos você precisa se certificar que o novo comportamento é compatível com o comportamento base.** Isso é importante porque objetos da subclasses podem ser passados para qualquer código que espera objetos da superclasse e você não quer que aquele código quebre.

* **A herança quebra o encapsulamento da superclasse** porque os detalhes internos da classe mãe se tornam disponíveis para a
subclasse. Pode ocorrer uma situação oposta onde um programador faz a superclasse ficar ciente de alguns detalhe das subclasses para deixar qualquer futura extensão mais fácil.

* **As subclasses estão firmemente acopladas as superclasses.** Quaisquer mudanças em uma superclasse podem quebrar a funcionalidade das subclasses.

** **Tentar reutilizar código através da herança pode levar a criação de hierarquias de heranças paralelas.** A herança geralmente acontece em apenas uma dimensão. Mas sempre que há duas ou mais dimensões, você tem que criar várias combinações de classe, inchando a hierarquia de classe para um tamanho ridículo.

Há uma alternativa para a herança chamada **composição**. Enquanto a herança representa uma relação “é um(a)” entre classes (um carro é um transporte), a composição representa a relação “tem um(a)” (um carro tem um motor).
