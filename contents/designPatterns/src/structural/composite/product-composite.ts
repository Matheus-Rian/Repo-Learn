export abstract class ProductComponent {
  abstract getPrice(): number;

  add(product: ProductComponent): void {}
  remove(product: ProductComponent): void {}
}

export class ProductLeaf extends ProductComponent {
  constructor(public name: string, public price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

export class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = [];

  add(...products: ProductComponent[]): void {
    for (let index in products) {
      this.children.push(products[index]);
    }
  }

  remove(...products: ProductComponent[]): void {
    for (let index in products) {
      const productIndex = this.children.indexOf(products[index]);
  
      if (productIndex !== -1)
        this.children.splice(productIndex, 1);
    }
  }

  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }

  getProductsComposite(): ProductComposite {
    return this;
  }
}

// Client
const pen = new ProductLeaf('Caneta', 1);
const book = new ProductLeaf('Livro', 20);
const pencil = new ProductLeaf('Lápis', 1);

const productsBox = new ProductComposite();
productsBox.add(pen, book, pencil);
productsBox.remove(book);

const tablet = new ProductLeaf('Tablet', 2_000);
const kindle = new ProductLeaf('kindle', 455);
const anotherProductsBox = new ProductComposite();
anotherProductsBox.add(tablet, kindle);

productsBox.add(anotherProductsBox);

console.log(productsBox.getProductsComposite());
console.log(productsBox.getPrice());