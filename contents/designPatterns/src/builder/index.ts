/**
 * A interface Builder específica os métodos para criar diferentes partes de uma postOrder(Exemplo)
 */
interface BuilderPostOrder {
  postOrderLive(): void;
  postOrderMovelPlan(): void;
  postOrderMovelPrice(): void;
}

class ConcreteBuilder implements BuilderPostOrder {
  private resultPostOrder: ResultPostOrder;

  constructor() {
    this.reset();
  }

  postOrderLive(): void {
    this.resultPostOrder.postOrder.live.plan = 'CONTROLE-LIVE';
    this.resultPostOrder.postOrder.live.price = 'R$ 1,00';
  }
  
  postOrderMovelPlan(): void {
    this.resultPostOrder.postOrder.movel.plan = 'CONTROLE-MOVEL';
  }

  postOrderMovelPrice(): void {
    this.resultPostOrder.postOrder.movel.price = 'R$ 2,00';
  }

  reset(): void {
    this.resultPostOrder = new ResultPostOrder();
  }

  public getPostOrder(): ResultPostOrder {
    const result = this.resultPostOrder;
    this.reset();
    return result;
  }
}

type postOrder = {
  live: {
    price: string,
    plan: string
  };
  movel: {
    price: string,
    plan: string
  };
};

class ResultPostOrder {
  public postOrder: postOrder = {} as postOrder;

  public listPostOrder(): void {
    console.log(`postOrder: ${this.postOrder}`);
  }
}
