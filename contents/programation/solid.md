# Princípios SOLID

O SOLID é uma sigla mnemônica em inglês para cinco princípios de projeto destinado a fazer dos projetos de software algo mais compreensivo, flexível e sustentável.

Como tudo na vida, usar estes princípios sem cuidado pode causar mais males que bem. O custo de aplicar estes princípios na arquitetura de um programa pode ser torná-lo mais complicado que deveria ser. Eu duvido que haja um produto de software de sucesso na qual todos estes princípios foram aplicados ao mesmo tempo. Empenhar-se para seguir estes princípios é bom, mas sempre tente ser pragmático e não tome tudo que está escrito aqui como um dogma.

## S - Single Responsibility Principle
> Princípio de Responsabilidade única

**Uma classe deve ter apenas uma razão para mudar.**

Tente fazer com que cada classe seja responsável por uma única parte da funcionalidade fornecida pelo software, e faça aquela responsabilidade ser inteiramente encapsulada pela (podemos também dizer escondida dentro da) classe.

Se uma classe faz muitas coisas, você terá que mudá-la cada vez que uma dessas coisas muda. Enquanto faz isso, você está arriscando quebrar outras partes da classe que você nem pretendia mexer. Se em determinado momento você sente que está se tornando difícil focar em aspectos específicos de um programa, lembre-se do princípio da responsabilidade única e verifique se já não é hora de dividir algumas classes em partes.

### Exemplo:

Classe Empregado tem vários motivos para mudar. O primeiro motivo pode ser relacionado a função principal da classe: gerenciar os dados dos empregados. Contudo, há outro motivo: o formato do relatório da tabela de tempos pode mudar com o tempo, fazendo com que você mude o código dentro da classe.

**ANTES**

```ts
class Employee {
  constructor (
    private name: string,
  ) {}

  getName() {
    return this.name;
  }

  printTimeSheetReport() {
    console.log('printing...');
  }
}
```

Resolva o problema movendo o comportamento relacionado aos relatórios para uma classe em separado. Essa mudança permite que você mova outras coisas relacionadas ao relatório para a nova classe.

**DEPOIS**

```ts
class Employee {
  constructor(
    private name: string,
  ) {}

  getName() {
    return this.name;
  }
}

class TimeSheetReport {
  print(employee: Employee) {
    console.log(employee.getName());
  }
}

const e = new Employee('Matheuss');
const t = new TimeSheetReport();
t.print(e);
```

## O - Open/Closed Principle
> Princípio aberto/fechado

As classes devem ser abertas para extensão mas fechadas para modificação.

A ideia principal deste princípio é prevenir que o código existente quebre quando você implementa novas funcionalidades.

Se a classe já foi desenvolvida, testada, revisada, e incluída em algum framework ou é de alguma forma já usada na aplicação, tentar mexer com seu código é arriscado. Ao invés de mudar o código da classe diretamente, você pode criar subclasses e sobrescrever partes da classe original que você quer que se comporte de forma diferente. Você vai cumprir seu objetivo mas também não quebrará os clientes existentes da classe original.

Este princípio não foi feito para ser aplicado para todas as mudanças de uma classe. Se você sabe que há um bug na classe, apenas vá e corrija-o; não crie uma subclasse para ele. Uma classe filha não deveria ser responsável pelos problemas da classe mãe.
