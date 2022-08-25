# Relação entre objetos

## Dependência

A dependência é o mais básico e o mais fraco tipo de relações
entre classes. Existe uma dependência entre duas classes se
algumas mudanças na definição de uma das classes pode resultar em modificações em outra classe. A dependência tipicamente ocorre quando você usa nomes de classes concretas em
seu código. Por exemplo, quando especificando tipos em assinaturas de métodos, quando instanciando objetos através de
chamadas do construtor, etc. Você pode tornar a dependência
mais fraca se você fazer seu código ser dependente de interfaces ou classes abstratas ao invés de classes concretas.

## Associação

A associação é um relacionamento no qual um objeto usa ou
interage com outro. Em diagramas UML, o relacionamento de
associação é mostrado por uma seta simples desenhada de
um objeto e apontada para outro que ele utiliza. A propósito,
ter uma associação bi-direcional é uma coisa completamente
normal. Neste caso, a flecha precisa apontar para ambos. A
associação pode ser vista como um tipo especializado de dependência, onde um objeto sempre tem acesso aos objetos os
quais ele interage, enquanto que a dependência simples não
estabelece uma ligação permanente entre os objetos.

## Agregação

Agregação é um tipo especializado de associação que representa relações individuais (one-to-many), múltiplas (many-to-many), e totais (whole-part) entre múltiplos objetos.
Geralmente, sob agregação, um objeto “tem” um conjunto de outros objetos e serve como um contêiner ou coleção. O componente pode existir sem o contêiner e pode ser ligado através de vários contêineres ao mesmo tempo. 

## Composição

A composição é um tipo específico de agregação, onde um objeto é composto de um ou mais instâncias de outro. A distinção
o entre esta relação e as outras é que o componente só pode existir como parte de um contêiner.