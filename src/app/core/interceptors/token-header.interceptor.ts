import { HttpInterceptorFn } from '@angular/common/http';
import { TokenService } from '../services/token.service';
import { inject } from '@angular/core';

export const tokenHeaderInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.includes('auth')) {
    return next(req);
  }

  const tokenService = inject(TokenService);
  const token = tokenService.getToken();

  const modifiedReq = req.clone({
    setHeaders: token
      ? {
          token: `${token}`,
        }
      : {},
  });

  return next(modifiedReq);
};
