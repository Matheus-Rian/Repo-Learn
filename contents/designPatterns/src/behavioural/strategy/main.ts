import { ECommerceShoppingCart } from "./shoppingCart/e-commerce-shopping-cart";
import { NewDiscount } from "./shoppingCart/new-discount";

const shoppingCart = new ECommerceShoppingCart();
shoppingCart.addProducts(
  { name: 'Produto 1', price: 50 },
  { name: 'Produto 2', price: 50 },
  { name: 'Produto 3', price: 50 },
);
shoppingCart.discount = new NewDiscount();
console.log(shoppingCart.getTotalWithDiscount());
