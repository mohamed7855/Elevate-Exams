import { Injectable } from '@angular/core';
import { Token } from '../interfaces/token';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class TokenService implements Token {
  constructor(private _cookieService: CookieService) {}

  setToken(token: string): void {
    this._cookieService.set('userToken', token, 7);
  }

  getToken(): string | null {
    return this._cookieService.get('userToken') || null;
  }

  removeToken(): void {
    this._cookieService.delete('userToken');
  }
}
