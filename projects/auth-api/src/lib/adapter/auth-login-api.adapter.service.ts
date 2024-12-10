import { Injectable } from '@angular/core';
import { Adapter } from '../interfaces/adapter';
import { LoginAPIRes, LoginRes } from '../interfaces/loginRes';
import { RegisterAPIRes, RegisterRes } from '../interfaces/registerRes';
import {
  ForgetPasswordAPIRes,
  ForgetPasswordRes,
} from '../interfaces/forgetPasswordRes';
import { VerifyCodeAPIRes, VerifyCodeRes } from '../interfaces/verifyCodeRes';

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

  adaptForgetPassword(data: ForgetPasswordAPIRes): ForgetPasswordRes {
    return { ...data };
  }

  adaptVerifyCode(data: VerifyCodeAPIRes): VerifyCodeRes {
    return { ...data };
  }
}
