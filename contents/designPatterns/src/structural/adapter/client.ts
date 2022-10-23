import { EmailValidatorProtocol } from './validation/email-validator-protocol';
import { EmailValidatorAdapter } from './validation/email-validator-adapter';

function validateEmail(emailValidator: EmailValidatorProtocol, email: string): void {
  if (emailValidator.isEmail(email)) {
    console.log('É válido')
  } else {
    console.log('É inválido')
  }
}

validateEmail(new EmailValidatorAdapter(),'souzamatheus@gmail.com');
