import { Observable } from 'rxjs';
import { ForgetPassword } from '../interfaces/forgetPassword';
import { ForgetPasswordRes } from '../interfaces/forgetPasswordRes';
import { Register } from '../interfaces/register';
import { RegisterRes } from '../interfaces/registerRes';
import { Login } from '../interfaces/login';
import { LoginRes } from '../interfaces/loginRes';

export abstract class AuthAPI {
  abstract login(data: Login): Observable<LoginRes>;
  abstract register(data: Register): Observable<RegisterRes>;
  abstract forgetPassword(data: ForgetPassword): Observable<ForgetPasswordRes>;
}
