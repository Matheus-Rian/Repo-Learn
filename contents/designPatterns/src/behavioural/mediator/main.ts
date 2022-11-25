import { Buyer } from "./buyer";
import { Mediator } from "./mediator";
import { Seller } from "./seller";

const mediator = new Mediator();

const seller1 = new Seller();
seller1.addProducts(
  { id: '1', name: 'T-Shirt', price: 50.0 },
  { id: '2', name: 'Book', price: 20.0 },
);

const seller2 = new Seller();
seller2.addProducts(
  { id: '3', name: 'Notebook', price: 5.000 },
  { id: '4', name: 'pen', price: 1.0 },
);

mediator.addSellers(seller1, seller2);

const buyer = new Buyer(mediator);
buyer.viewProducts();
buyer.buy('1');
buyer.buy('3');
buyer.viewProducts();
