import { AuthLoginAPIAdapterService } from './adapter/auth-login-api.adapter.service';
import { Injectable } from '@angular/core';
import { AuthAPI } from './base/AuthAPI';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthEndpoint } from './enums/AuthAPI.endpoint';
import { LoginUser } from './interfaces/login';
import { LoginRes } from './interfaces/loginRes';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService implements AuthAPI {
  
  baseURL !:string
  
  set setBaseURL(url : string) {
    this.baseURL ="https://exam.elevateegy.com" ;
  }

  constructor(
    private _httpClient: HttpClient,
    private _authAPIAdapterService: AuthLoginAPIAdapterService
  ) {}

  login(data: LoginUser): Observable<LoginRes | never[]> {
    const api = `${this.baseURL}${AuthEndpoint.LOGIN}`
    return this._httpClient.post(AuthEndpoint.LOGIN, data).pipe(
      map((res:any) => this._authAPIAdapterService.adapt(res)),
      catchError((err) => of([]))
    );
  }
  register(data: any): Observable<any> {
    return this._httpClient.post(AuthEndpoint.REGISTER, data);
  }
}
