# Relação entre objetos

## Dependência

A dependência é o mais básico e o mais fraco tipo de relações
entre classes. Existe uma dependência entre duas classes se
algumas mudanças na definição de uma das classes pode resultar em modificações em outra classe. A dependência tipicamente ocorre quando você usa nomes de classes concretas em
seu código. Por exemplo, quando especificando tipos em assinaturas de métodos, quando instanciando objetos através de
chamadas do construtor, etc. Você pode tornar a dependência
mais fraca se você fazer seu código ser dependente de interfaces ou classes abstratas ao invés de classes concretas.