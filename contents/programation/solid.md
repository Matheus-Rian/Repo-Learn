# Princípios SOLID

O SOLID é uma sigla mnemônica em inglês para cinco princípios de projeto destinado a fazer dos projetos de software algo mais compreensivo, flexível e sustentável.

Como tudo na vida, usar estes princípios sem cuidado pode causar mais males que bem. O custo de aplicar estes princípios na arquitetura de um programa pode ser torná-lo mais complicado que deveria ser. Eu duvido que haja um produto de software de sucesso na qual todos estes princípios foram aplicados ao mesmo tempo. Empenhar-se para seguir estes princípios é bom, mas sempre tente ser pragmático e não tome tudo que está escrito aqui como um dogma.

## S - Single Responsibility Principle

**Uma classe deve ter apenas uma razão para mudar.**

Tente fazer com que cada classe seja responsável por uma única parte da funcionalidade fornecida pelo software, e faça aquela responsabilidade ser inteiramente encapsulada pela (podemos também dizer escondida dentro da) classe.

Se uma classe faz muitas coisas, você terá que mudá-la cada vez que uma dessas coisas muda. Enquanto faz isso, você está arriscando quebrar outras partes da classe que você nem pretendia mexer. Se em determinado momento você sente que está se tornando difícil focar em aspectos específicos de um programa, lembre-se do princípio da responsabilidade única e verifique se já não é hora de dividir algumas classes em partes.