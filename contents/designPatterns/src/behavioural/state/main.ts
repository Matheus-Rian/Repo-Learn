import { ShoppingOrder } from './shopping-order/shopping-order';

const shoppingOrder = new ShoppingOrder();
shoppingOrder.approvePayment();
shoppingOrder.waitPayment();

shoppingOrder.rejectPayment();
shoppingOrder.approvePayment();
shoppingOrder.waitPayment();

shoppingOrder.shipOrder();
