import { Injectable } from '@angular/core';
import { Adapter } from '../interfaces/adapter';
import { LoginAPIRes, LoginRes } from '../interfaces/loginRes';
import { RegisterAPIRes, RegisterRes } from '../interfaces/registerRes';

@Injectable({
  providedIn: 'root',
})
export class AuthLoginAPIAdapterService implements Adapter {
  constructor() {}
  adaptLogin(data: LoginAPIRes): LoginRes {
    return {
      message: data.message,
      token: data.token,
      userEmail: data.user.email,
    };
  }

  adaptRegister(data: RegisterAPIRes): RegisterRes {
    return { ...data };
  }
}