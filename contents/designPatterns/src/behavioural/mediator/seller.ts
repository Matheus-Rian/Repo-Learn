import { Mediator } from "./mediator";
import { SellerProduct } from "./seller-product-protocol";

export class Seller {
  private products: SellerProduct[] = [];
  private mediator?: Mediator;

  setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }

  showProducts(): void {
    this.products.forEach(product => console.log(product));
  }

  addProducts(...products: SellerProduct[]): void {
    products.forEach(product => this.products.push(product));
  }

  sell(id: string): SellerProduct | void {
    const productIndex = this.products.findIndex(product => product.id === id);

    if (productIndex === -1)
      return;

    const product = this.products.splice(productIndex, 1);
    return product[0];
  }
}