import { ShoppingOrder } from "./shopping-order";
import { ShoppingOrderState } from "./shopping-order-state-protocol";

export class OrderRejected implements ShoppingOrderState {
  private name = 'OrderRejected';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    console.log('Não posso aprovar o pagamento porque ele foi recusado');
  }

  rejectPayment(): void {
    console.log('O pedido já está no estado de pagamento recusado');
  }
  
  waitPayment(): void {
    console.log('Não posso mover para pendente o pagamento porque ele foi recusado');
  }

  shipOrder(): void {
    console.log('Não posso enviar o pedido porque ele foi recusado');
  }
}