import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthApiService } from 'auth-api';
import { ButtonComponent } from '../../../shared/components/ui/button/button.component';
import { Router, RouterLink } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtonComponent,
    InputTextModule,
    PasswordModule,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor(
    private _authApiService: AuthApiService,
    private _tokenService: TokenService,
    private _router: Router
  ) {}

  login() {
    this._authApiService.login(this.loginForm.value).subscribe((res) => {
      this._tokenService.setToken(res.token);
      this._router.navigate(['/home']);
    });
  }
}
