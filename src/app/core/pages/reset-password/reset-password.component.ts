import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthApiService } from 'auth-api';
import { PasswordModule } from 'primeng/password';
import { ButtonComponent } from '../../../shared/components/ui/button/button.component';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [ReactiveFormsModule, PasswordModule, ButtonComponent],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss',
})
export class ResetPasswordComponent {
  resetPasswordForm: FormGroup = new FormGroup({
    email: new FormControl(null, Validators.required),
    newPassword: new FormControl(null, Validators.required),
  });

  constructor(private _authApiService: AuthApiService) {}

  resetPassword() {
    const data = {
      ...this.resetPasswordForm.value,
      email: sessionStorage.getItem('email'),
    };
    this._authApiService.resetPassword(data).subscribe((res) => {});
  }
}
