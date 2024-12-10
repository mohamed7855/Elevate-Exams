import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthApiService } from 'auth-api';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [ReactiveFormsModule],
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
    this._authApiService
      .resetPassword(this.resetPasswordForm.value)
      .subscribe((res) => {});
  }
}
