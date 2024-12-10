import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApiService } from 'auth-api';

@Component({
  selector: 'app-verify-code',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './verify-code.component.html',
  styleUrl: './verify-code.component.scss',
})
export class VerifyCodeComponent {
  verifyCodeForm: FormGroup = new FormGroup({
    resetCode: new FormControl(null, Validators.required),
  });

  constructor(private _authApiService: AuthApiService) {}

  verifyCode() {
    this._authApiService
      .verifyCode(this.verifyCodeForm.value)
      .subscribe((res) => {});
  }
}
