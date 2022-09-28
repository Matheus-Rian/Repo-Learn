// Estrutura 

// 1. O Transport declara a interface, que é comum a todos os objetos que podem ser produzidos pelo criador e suas subclasses.
interface Transport {
  makeDelivery: () => string;
}

// 2. Os Transport Concretos são implementações diferentes da interface do produto.
class Car implements Transport {
  makeDelivery(): string {
    return 'Deliverying with car';
  }
}

class Truck implements Transport {
  makeDelivery(): string {
    return 'Deliverying with Truck';
  }
}

// 3. A classe Criador declara o método fábrica que retorna novos
// objetos Transport. É importante que o tipo de retorno desse método corresponda à interface do Transport.
abstract class CreatorTransport {
  abstract factoryMethod(): Transport;

  delivery(): string {
    // Chamar o Factory Method para criar um objeto de transporte
    const transport = this.factoryMethod();
    // Agora, use o transporte criado
    return transport.makeDelivery();
  }
}

// 4. Criadores Concretos sobrescrevem o método fábrica base para retornar um tipo diferente de Transporte.
class CreatorCar extends CreatorTransport {
  factoryMethod(): Transport {
    return new Car();
  }
}

class CreatorTruck extends CreatorTransport {
  factoryMethod(): Transport {
    return new Truck();
  }
}

function clientCode(creator: CreatorTransport) {
  console.log(`Your delivery is on the way (${creator.delivery()})`) 
}

clientCode(new CreatorCar());
clientCode(new CreatorTruck());
