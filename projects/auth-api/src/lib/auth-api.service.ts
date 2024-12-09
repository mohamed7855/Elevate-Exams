import { AuthLoginAPIAdapterService } from './adapter/auth-login-api.adapter.service';
import { Injectable } from '@angular/core';
import { AuthAPI } from './base/AuthAPI';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthEndpoint } from './enums/AuthAPI.endpoint';
import { Login } from './interfaces/login';
import { LoginRes } from './interfaces/loginRes';
import { Register } from './interfaces/register';
import { RegisterAPIRes, RegisterRes } from './interfaces/registerRes';

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

  login(data: Login): Observable<LoginRes | never[]> {
    const api = `${this.baseURL}${AuthEndpoint.LOGIN}`;
    return this._httpClient.post(api, data).pipe(
      map((res: any) => this._authAPIAdapterService.adaptLogin(res)),
      catchError((err) => of([]))
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
}
