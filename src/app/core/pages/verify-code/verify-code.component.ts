import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApiService } from 'auth-api';
import { ButtonComponent } from '../../../shared/components/ui/button/button.component';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-verify-code',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, ButtonComponent],
  templateUrl: './verify-code.component.html',
  styleUrl: './verify-code.component.scss',
})
export class VerifyCodeComponent {
  verifyCodeForm: FormGroup = new FormGroup({
    resetCode: new FormControl(null, Validators.required),
  });

  constructor(
    private _authApiService: AuthApiService,
    private _router: Router
  ) {}

  verifyCode() {
    this._authApiService
      .verifyCode(this.verifyCodeForm.value)
      .subscribe((res) => {
        this._router.navigate(['/auth/resetPassword']);
      });
  }
}
