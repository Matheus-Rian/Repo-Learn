import { SystemUserAddressProtocol, SystemUserProtocol } from './system-user-protocol';

export class AdminUser implements SystemUserProtocol {
  constructor(public firstName: string, public userName: string) {}

  async getAddresses(): Promise<SystemUserAddressProtocol[]> {
    return new Promise((resolve) => {
      return setTimeout(() => {
        return resolve([
          { street: 'A', number: 2 },
          { street: 'B', number: 20 },
          { street: 'C', number: 1 },
          { street: 'D', number: 22 },
        ]);
      }, 2000);
    });
  }
}