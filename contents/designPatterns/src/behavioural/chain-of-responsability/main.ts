import { CustomerBudget } from "./customer-budget";
import { SellerBudgetHandler } from './seller-budget-handler';
import { ManagerBudgetHandler } from './manager-budget-handler';
import { DirectorBudgetHandler } from './director-budget-handler';
import { CeoBudgetHandler } from './ceo-budget-handler';

const customer = new CustomerBudget(60100);
const seller = new SellerBudgetHandler();

seller
  .setNextHandler(new ManagerBudgetHandler())
  .setNextHandler(new DirectorBudgetHandler())
  .setNextHandler(new CeoBudgetHandler());

seller.handle(customer);