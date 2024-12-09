import { LoginAPIRes, LoginRes } from './loginRes';
import { RegisterAPIRes, RegisterRes } from './registerRes';

export interface Adapter {
  adaptLogin(data: LoginAPIRes): LoginRes;
  adaptRegister(data: RegisterAPIRes): RegisterRes;
}
