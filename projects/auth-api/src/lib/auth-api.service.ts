import { AuthLoginAPIAdapterService } from './adapter/auth-login-api.adapter.service';
import { Injectable } from '@angular/core';
import { AuthAPI } from './base/AuthAPI';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthEndpoint } from './enums/AuthAPI.endpoint';
import { Login } from './interfaces/login';
import { LoginAPIRes, LoginRes } from './interfaces/loginRes';
import { Register } from './interfaces/register';
import { RegisterAPIRes, RegisterRes } from './interfaces/registerRes';
import { ForgetPassword } from './interfaces/forgetPassword';
import {
  ForgetPasswordAPIRes,
  ForgetPasswordRes,
} from './interfaces/forgetPasswordRes';
import { VerifyCode } from './interfaces/verifyCode';
import { VerifyCodeAPIRes, VerifyCodeRes } from './interfaces/verifyCodeRes';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService implements AuthAPI {
  baseURL!: string;

  setBaseURL() {
    this.baseURL = 'https://exam.elevateegy.com';
  }

  constructor(
    private _httpClient: HttpClient,
    private _authAPIAdapterService: AuthLoginAPIAdapterService
  ) {
    this.setBaseURL();
  }

  login(data: Login): Observable<LoginRes> {
    const api = `${this.baseURL}${AuthEndpoint.LOGIN}`;
    return this._httpClient.post<LoginAPIRes>(api, data).pipe(
      map((res: LoginAPIRes) => this._authAPIAdapterService.adaptLogin(res)),
      catchError((err) => of())
    );
  }

  register(data: Register): Observable<RegisterRes> {
    const api = `${this.baseURL}${AuthEndpoint.REGISTER}`;
    return this._httpClient.post<RegisterAPIRes>(api, data).pipe(
      map((res: RegisterAPIRes) =>
        this._authAPIAdapterService.adaptRegister(res)
      ),
      catchError((err) => {
        console.error('Registration error:', err);
        return throwError(
          () => new Error(err?.error?.message || 'Registration failed.')
        );
      })
    );
  }

  forgetPassword(data: ForgetPassword): Observable<ForgetPasswordRes> {
    const api = `${this.baseURL}${AuthEndpoint.FORGET_PASSWORD}`;
    return this._httpClient.post<ForgetPasswordAPIRes>(api, data).pipe(
      map((res: ForgetPasswordAPIRes) =>
        this._authAPIAdapterService.adaptForgetPassword(res)
      ),
      catchError((err) => {
        console.error('ForgetPassword error:', err);
        return throwError(
          () =>
            new Error(err?.error?.message || 'Password reset request failed.')
        );
      })
    );
  }

  verifyCode(data: VerifyCode): Observable<VerifyCodeRes> {
    const api = `${this.baseURL}${AuthEndpoint.VERIFY_PASSWORD}`;
    return this._httpClient.post<VerifyCodeAPIRes>(api, data).pipe(
      map((res: VerifyCodeAPIRes) =>
        this._authAPIAdapterService.adaptVerifyCode(res)
      ),
      catchError((err) => {
        console.error('ResetCode error:', err);
        return throwError(
          () =>
            new Error(err?.error?.message || 'Code reset request failed.')
        );
      })
    );
  }
}
