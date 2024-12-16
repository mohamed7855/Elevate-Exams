import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApiService } from 'auth-api';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonComponent } from '../../../shared/components/ui/button/button.component';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, ButtonComponent],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss',
})
export class ForgetPasswordComponent {
  forgetPasswordForm: FormGroup = new FormGroup({
    email: new FormControl(null, Validators.required),
  });

  constructor(
    private _authApiService: AuthApiService,
    private _router: Router
  ) {}

  forgetPassword() {
    this._authApiService
      .forgetPassword(this.forgetPasswordForm.value)
      .subscribe((res) => {
        sessionStorage.setItem('email', this.forgetPasswordForm.value.email);
        this._router.navigate(['/auth/verifyCode']);
      });
  }
}
