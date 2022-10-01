import { Customer } from "../interfaces/customer";

export class IndividualCustomer implements Customer {
  constructor (public name: string) {}
}
