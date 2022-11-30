import { resolve } from 'path';
import { CustomerDataParserJson } from './customer-data-parser-json';
import { CustomerDataParserTxt } from './customer-data-parser-txt';

async function run() {
  const filePathTxt = resolve(__dirname, 'files', 'customers.txt');
  const customerDataTxt = new CustomerDataParserTxt(filePathTxt);
  await customerDataTxt.fixCustomerData();
  console.log(customerDataTxt.customerData);

  console.log();

  const filePathJson = resolve(__dirname, 'files', 'customers.json');
  const customerDataJson = new CustomerDataParserJson(filePathJson);
  await customerDataJson.fixCustomerData();
  console.log(customerDataJson.customerData);
}

run();
