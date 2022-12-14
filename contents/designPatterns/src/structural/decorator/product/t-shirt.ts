import { ProductProtocol } from "./product-protocol";

export class TShirt implements ProductProtocol {
  private name = 'Camiseta';
  private price = 39;

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }
}
