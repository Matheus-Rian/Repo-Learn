import { SystemUserProxy } from "./system-user/system-user-proxy";

async function clientCode() {
  const user = new SystemUserProxy('Mathues', 'Rian');
  console.log('Vai levar dois segundos');
  console.log(await user.getAddresses())

  console.log('Isso vai se repetir (CACHE)');
  for (let i = 0; i < 5; i++) {
    console.log(await user.getAddresses())
  }
}

clientCode()